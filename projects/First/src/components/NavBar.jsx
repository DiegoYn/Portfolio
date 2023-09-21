
import './Styles/NavBar.css';

export function NavBar() {
  const imgsrc = "../src/img/svg/"; // Asegúrate de que la ruta de las imágenes sea correcta

  return (
    <nav>
      <ul className='title'>
      <li><a href="#home">My Portfolio</a></li>
      </ul>
      <ul className="nav-links">
        
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Proyects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
      <ul className="social-icons">
        <li><a href="https://github.com/DiegoYn"><img src={`${imgsrc}github.svg`} alt="Icono Github" /></a></li>
        <li><a href="https://instagram.com/box_boxz/"><img src={`${imgsrc}instagram.svg`} alt="Icono Instagram" /></a></li>
        <li><a href="https://linkedin.com/in/diego-yañez-zzz/"><img src={`${imgsrc}linkedin.svg`} alt="Icono Linkedin" /></a></li>
      </ul>
    </nav>
  );
}
