import { useState } from 'react'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <HomePage/>
      <AboutPage />
      <SkillsPage/>
      <ProjectsPage />
      <Footer />
    </>
  )
}

export default App
