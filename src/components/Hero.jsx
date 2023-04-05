export default function Hero() {
    return (
        <section id="hero">
            <div className="header hidden">
                <h3 className="greeting">Hi There!</h3>
                <h1 className="hidden">I'm <span style={{ color: '#FEAD2A' }}>Aditya Sharma</span></h1>
                <div className="headerDesc hidden">A Full Stack Web Developer</div>
                <div className="profileLinks hidden">
                    <a className="profileLink" href="https://www.linkedin.com/in/adityasharma91/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square fa-2x"></i></a>
                    <a className="profileLink" href="https://github.com/adidevs" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-2x"></i></a>
                    <a className="profileLink" href="https://twitter.com/AdityaSh91" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter fa-2x"></i></a>
                    <a className="profileLink" href="mailto:adityasharma3151@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-envelope fa-2x"></i></a>
                </div>
            </div>
        </section>

    )
}