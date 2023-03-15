export default function Navbar(props) {
  function handleClick(){
    document.getElementById('navItems').classList.toggle('active');
  } 
  return (
    

    <nav>
      <a href="#hero"><h3 className="navHead">Aditya Sharma</h3></a>  
      <button onClick={handleClick} id="navToggle" className="menuIcon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul  id="navItems" className="navItems">
        <li><a className="navItem" href="#projects">Projects</a></li>
        <li><a className="navItem" href="#skills">Skills</a></li>
        <li><a className="navItem" href="#about">About</a></li>
        <li><a href="./resources/Aditya_Sharma.pdf" className="navItem resumeLink">Resume  <i class="fa-solid fa-file-export"></i></a></li>
      </ul>
      
    </nav>
  )
}