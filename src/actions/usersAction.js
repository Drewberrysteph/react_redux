import { uuid } from "uuidv4"

export const addUser = userDetais => {
  const { id, name, lastName } = userDetais
  return {
    type: "ADD_USER",
    payload: {
      id: uuid(),
      name,
      lastName,
    },
  }
}

export const delUser = id => {
  return {
    type: "DELETE_USER",
    payload: { id },
  }
}
