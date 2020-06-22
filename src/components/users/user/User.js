import React from "react"

const User = ({ user, handleDelete }) => {
  const { id, name, lastName } = user
  return (
    <div>
      {name} {lastName}
      <button onClick={() => handleDelete(id)}> delete </button>
    </div>
  )
}

export default User
