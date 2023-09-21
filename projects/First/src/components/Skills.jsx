
import './Styles/Skills.css'; // Importa la hoja de estilo CSS correspondiente

export function Skills() {

  return (
    <div className='Abilities'>
        <h1 className='SkillsTitle'>SKILLS</h1>
        <div className='Abilities-content'>
            <div className='Abilities-item'>
                <p><strong>REACT</strong> is a popular JavaScript library for building user interfaces. It simplifies the creation of reusable UI components and efficiently updates the view when data changes, making complex web apps more manageable.</p>
                <img src="../src/img/Skills/react.png" alt="ReactLogo" />
            </div>
            <div className='Abilities-item'>
                <img src="../src/img/Skills/html5.png" alt="Html5Logo" />
                <p><strong>HTML5</strong> is the foundation of web development. It is used to structure the content of web pages, defining elements like headings, paragraphs, links, and images.</p>
            </div>
            <div className='Abilities-item'>
                <p><strong>CSS3</strong> is a crucial web technology that enhances website design by introducing features like advanced selectors, animations, gradients, and layout systems such as Flexbox and CSS Grid. It enables developers to create visually appealing and responsive web designs, improving the overall user experience.</p>
                <img src="../src/img/Skills/css3.png" alt="CssLogo" />
            </div>
        </div>
    </div>
  );
}
