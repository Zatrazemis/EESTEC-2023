import React, { createContext, useContext } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import { theme } from './theme'
import 'tailwindcss/tailwind.css'

export const ThemeContext = createContext(theme)
const App = () => {
  return (<>
  <ThemeContext.Provider value={theme}>
    <Topbar />
    <Sidebar />
    </ThemeContext.Provider>
    </>
  )
}

export default App