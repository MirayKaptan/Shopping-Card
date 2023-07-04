import React, { createContext, useState } from 'react'

export const Card = createContext()
const Context = ({children}) => {
    const[card, setCard] = useState([])
  return (
    <Card.Provider value={{card, setCard}}>{children}</Card.Provider>
  )
}

export default Context

