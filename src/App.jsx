import { useState } from 'react'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {

  return (
    <>
      <HomePage/>
      <AboutPage />
      <SkillsPage/>
      <ProjectsPage />
    </>
  )
}

export default App
