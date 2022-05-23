import React, { useState } from 'react'
import themes from '../Themes'

export const ThemeContext = React.createContext({})

export const ThemeProvider = props => {
  const [theme, setTheme] = useState(themes.dark)

  function ToogleTheme() {
    setTheme(themes.light)
  }

  return (
    <ThemeContext.Provider value={(theme, ToogleTheme)}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
