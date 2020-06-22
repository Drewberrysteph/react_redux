import React, { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../../../actions/usersAction"

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  })

  const dispatch = useDispatch()

  const nameRef = useRef()

  const handleChange = e => {
    const { name, value } = e.target
    setUser(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addUser(user))
    setUser({
      name: "",
      lastName: "",
    })
    nameRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={e => handleChange(e)}
        ref={nameRef}
      />
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={e => handleChange(e)}
      />
      <button>Add User</button>
    </form>
  )
}

export default Form
