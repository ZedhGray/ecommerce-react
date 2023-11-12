import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm()
  const { createUser } = useAuth()

  const submit = (data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    createUser(url, data)
    reset({
      firsName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    })
  }

  return (
    <article className="register__container">
      <div className="spaceheader"></div>

      <form className="form" onSubmit={handleSubmit(submit)}>
        <p className="title">Sign Up </p>
        <div className="flex">
          <label htmlFor="firsName">First Name</label>
          <input
            className="input"
            {...register('firsName')}
            type="text"
            id="firsName"
          />
        </div>

        <div className="flex">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="input"
            {...register('lastName')}
            type="text"
            id="lastName"
          />
        </div>
        <div className="flex">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            {...register('email')}
            type="text"
            id="email"
          />
        </div>
        <div className="flex">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            {...register('password')}
            type="password"
            id="password"
          />
        </div>
        <div className="flex">
          <label htmlFor="phone">Phone</label>
          <input
            className="input"
            {...register('phone')}
            type="number"
            id="phone"
          />
        </div>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ?<Link to="/login">Login</Link>
        </p>
      </form>
    </article>
  )
}

export default RegisterPage
