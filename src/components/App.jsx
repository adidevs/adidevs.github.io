import { useEffect } from "react"
import About from "./About"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"
export default function App() {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else { 
                    entry.target.classList.remove('show');
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(element => observer.observe(element));
    }, [])

    return (
        <div>
            <Navbar />
            <Hero/>
            <div className="container">
                <About />
                <Skills />
            </div>
            <Projects />
            <Footer/>
        </div>
    )
}