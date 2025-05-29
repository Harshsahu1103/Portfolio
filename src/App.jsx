import './App.css'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Eduction from './Component/Eduction'
import Skills from './Component/Skills'
import Project from './Component/Project'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Home from './Component/Home'

function App() {
 

  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Eduction />
    <Skills />
    <Project />
    <Contact />
    <Footer />

 {/* <h1 className="bg-black text-white">
        Hello world!
      </h1> */}
    </>
    
  )
}

export default App
