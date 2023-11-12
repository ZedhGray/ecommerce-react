import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import LoggedMesage from './LoggedMesage'

const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm()
  const { loginUser } = useAuth()

  const submit = (data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    loginUser(url, data)
    reset()
  }
  if (localStorage.getItem('token')) {
    return (
      <div className="login__container">
        <div className="spaceheader"></div>
        <LoggedMesage />
      </div>
    )
  } else {
    return (
      <div className="login__container">
        <div className="spaceheader"></div>
        <form className="form" onSubmit={handleSubmit(submit)}>
          <p className="title">Login </p>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="input"
              {...register('email')}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="input"
              {...register('password')}
              type="password"
              id="password"
            />
          </div>
          <button className="submit">Login</button>
          <p className="signin">
            Already have an acount ? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default LoginPage
