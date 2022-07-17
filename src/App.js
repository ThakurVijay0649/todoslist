import React  from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { About } from './Components/About';
function App() {
    return (
        <Router>
            <Navbar title="Todos List | Vijay Thakur" searchBar={true} />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App