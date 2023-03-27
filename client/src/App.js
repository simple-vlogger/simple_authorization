import React from "react"
import axios from "axios"
import "./App.css"


function App() {
  const apiURL = "http://localhost:2000/api/auth"

  const [user, setUser] = React.useState({
    username: "",
    password: ""
  })

  const onChangeUser = (e) => {
    setUser(user => ({ ...user, [e.target.name]: e.target.value }))
    console.log(user)
  }

  const onClickRegister = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(`${apiURL}/register`, { ...user })
      console.log(result.data)
    } catch (error) {
      alert(error)
    }
  }



  return (
    <div className="register">
      <form className="register__form">
        <input className="register-form__input" placeholder="username" name="username" onChange={(e) => onChangeUser(e)}/>
        <input className="register-form__input" placeholder="password" name="password" onChange={(e) => onChangeUser(e)}/>
        <button className="register-form__btn" onClick={(e) => onClickRegister(e)}>Krish</button>
      </form>
    </div>
  )
}

export default App;