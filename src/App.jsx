import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path = '/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
