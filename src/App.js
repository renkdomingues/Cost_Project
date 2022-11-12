import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'



function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>     
            <Route path='/' exact='true' element={<Home/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/newproject' element={<NewProject/>}></Route>
            <Route path='/project/:id' element={<Project />}></Route>
            <Route path='/company' element={<Company/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
