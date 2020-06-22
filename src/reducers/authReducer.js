const isLogged = false

const authReducer = (state = isLogged, action) => {
  switch (action.type) {
    case "LOG_IN":
      return (state = true)
    case "LOG_OUT":
      return (state = false)
    default:
      return state
  }
}

export default authReducer
