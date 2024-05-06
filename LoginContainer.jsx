import { useContext, useState } from "react"
import { SectionContext } from "../context/SectionContext"
import { AuthContext } from "../context/AuthContext"
import { AlertContext } from "../context/AlertContext"
import { UserContext } from "../context/UserContext"

function LoginContainer() {
  const { setHeroSection, setAlertDiv } = useContext(SectionContext)
  const { login } = useContext(AuthContext)
  const { setMessage, setImg } = useContext(AlertContext)
  const { userEmail, setUserEmail, loadUser } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validateLogin = (email, password) => {
    const minPasswordLength = 6
    const maxPasswordLength = 20
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isEmailValid = emailRegex.test(email)
    const isPasswordValid = password.length >= minPasswordLength && password.length <= maxPasswordLength
    return isEmailValid && isPasswordValid
  }

  const handleLogin = async (email, password) => {
    try {
      await login(email, password)
      setHeroSection(false)
      setUserEmail(email)
      loadUser(email)
    } catch (err) {
      const errMessage = (err.message = "Firebase: Error (auth/invalid-credential).")
      ? "Invalid email or password, try again" 
      : "an error ocurred while signin in: " + err.message;
      setAlertDiv(true)
      setMessage(errMessage)
      setImg("error.gif")
    }
  }

  return (
    <figure className="bg-blue-dark rounded-xl p-6 pb-12 flex flex-col items-center mt-32 w-full md:mt-40 md:w-1/2 lg:w-5/6 lg:mt-28 lg:pb-8">
        <img src="robot.png" alt="robot" className="h-40 -mt-32"/>
        <h3 className="text-3xl font-semibold text-light">Login</h3>
        <form className="flex flex-col w-4/5 mt-12 gap-6 lg:mt-4 lg:gap-4" onSubmit={e => {
            e.preventDefault()
            if(validateLogin(email, password)) handleLogin(email, password)
            else alert("Correo o contraseña inválidos")
          }
        }>
          <input type="text" placeholder="email" className="bg-transparent border-b-2 border-light py-3 text-2xl outline-none text-light lg:text-xl lg:py-2 focus:border-b-blue-turquoise focus:text-blue-turquoise" onChange={e => setEmail(e.target.value)} value={email}/>
          <input type="password" placeholder="password" className="bg-transparent border-b-2 border-light py-3 text-2xl outline-none text-light lg:text-xl lg:py-2 focus:border-b-blue-turquoise focus:text-blue-turquoise" onChange={e => setPassword(e.target.value)} value={password}/>
          <button type="submit" className="py-2 px-8 bg-blue-turquoise rounded-xl font-semibold text-blue-dark hover:bg-blue-turquoiseHover transition-all mt-6 text-2xl lg:mt-8">continue</button>
        </form>
    </figure>
  )
}

export default LoginContainer