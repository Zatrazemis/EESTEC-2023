import React, { createContext, useContext } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import { theme } from './theme'
import 'tailwindcss/tailwind.css'
import { Route, Routes } from "react-router-dom"
import Dashboard from './components/pages/Dashboard'
import Calendar from './components/pages/Calendar'
import News from './components/pages/News'
import Team from './components/pages/Team'
import Profile from './components/pages/Profile'


export const ThemeContext = createContext(theme)
const App = () => {
  return (<>
  
  <ThemeContext.Provider value={theme}>
    <Topbar />
    <Sidebar />
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/team" element={<Team />} />
    <Route path="/news" element={<News />} />
    <Route path="/calendar" element={<Calendar />} />
    </Routes>
    </ThemeContext.Provider>
    </>
  )
}

export default App