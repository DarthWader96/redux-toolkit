import { useState } from "react"
import { logo } from "../constants"
import { Input } from "../ui"
import { useDispatch, useSelector } from "react-redux"
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth"
import AuthService from "../service/auth"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)

  const loginHandler = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = { email, password }
    try {
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={logo} alt="" width="72" height="50" />
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>

          <Input label={"Email address"} type={"email"} state={email} setState={setEmail} />
          <Input label={"Password"} type={"password"} state={password} setState={setPassword} />

          <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} onClick={loginHandler} type="submit">{isLoading ? "Loading..." : "Login"}</button>
        </form>
      </main>
    </div>
  )
}

export default Login