import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

import NotFound from './pages/notFound/NotFound'
import Navbar from './UI/navbar/Navbar';
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App