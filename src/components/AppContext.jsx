import { createContext, useCallback, useState } from "react"

const initialState = {
  entries: [
    { amount: 1000, description: "1 day consulting" },
    { amount: 3000, description: "3 days consulting" },
    { amount: -5500, description: "1 iPhone cable" },
    { amount: 10, description: "100 days of Windows support" },
    { amount: 5000, description: "1 day consulting IBM" },
  ],
}

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  const addEntry = useCallback(({ amount, description }) => {
    setState((currentState) => ({
      ...currentState,
      entries: [...currentState.entries, { amount, description }],
    }))
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{ entries: state.entries, addEntry }}
    />
  )
}

export default AppContext
