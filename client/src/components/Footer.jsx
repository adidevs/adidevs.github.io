export default function Footer() {
    return (
        <section id="footer">
            <div className="footerContent">
                <div className="footerSocials">
                    <h3>Socials</h3>
                    <div className="profileLinks">
                        <a className="profileLink" href="https://www.linkedin.com/in/adityasharma91/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square fa-1x"></i></a>
                        <a className="profileLink" href="https://github.com/adidevs" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-1x"></i></a>
                        <a className="profileLink" href="https://twitter.com/AdityaSh91" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter fa-1x"></i></a>
                        <a className="profileLink" href="mailto:adityasharma3151@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-envelope fa-1x"></i></a>
                    </div>
                </div>
                <div className="footerName">
                    <a href="#hero"><h3>Back to Top  <i class="fa-sharp fa-solid fa-arrow-up"></i></h3></a>
                </div>
            </div>
            <div className="copyright">Copyright ©️{new Date().getFullYear()}, Made by <span style={{ color: '#FEAD2A' }}>Aditya Sharma</span></div>
        </section>
    )
}