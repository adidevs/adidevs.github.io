import About from "./About"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"
export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <About />
                <Skills />
            </div>
            <Projects />
            <Footer/>
        </div>
    )
}