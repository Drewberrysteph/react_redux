const users = [
  {
    id: 1,
    name: "drew",
    lastName: "stifler",
  },
  {
    id: 2,
    name: "jane",
    lastName: "doe",
  },
  {
    id: 3,
    name: "mark",
    lastName: "kristoff",
  },
]

const usersReducer = (state = users, action) => {
  const { payload, type } = action
  switch (type) {
    case "ADD_USER":
      return [...state, payload]
    case "DELETE_USER":
      const filteredUser = state.filter(s => s.id !== payload.id)
      return filteredUser
    default:
      return state
  }
}

export default usersReducer
