import React from 'react'
import Navbar from './components/Navbar'
import UploadPage from './components/Upload'

const App = () => {
  return (
    <>
      
    <title>VasthraAI</title>{/* Page title */} 
      {/* <Navbar /> */}
      <UploadPage /> {/* Renders the UploadPage, which already includes the Navbar */}
    </>
  )
}

export default App