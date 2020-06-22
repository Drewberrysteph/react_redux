import React from "react"
import { useSelector, useDispatch } from "react-redux"
import User from "./user/User"
import Form from "./utilities/Form"
import { delUser } from "../../actions/usersAction"

const Users = () => {
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  const handleDelete = id => {
    dispatch(delUser(id))
  }

  const allUsers = users.map((user, idx) => (
    <User key={idx} user={user} handleDelete={handleDelete} />
  ))

  return (
    <div>
      <Form />
      {allUsers}
    </div>
  )
}

export default Users
