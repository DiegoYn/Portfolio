
import './Styles/Home.css'; 

export function Home({UserName}) {
  const imgprofilesrc = `../src/img/${UserName}.png`; 
  return (
    <section id="home">
      <div className="home-content">
      <img id="Photo-profile" src={`${imgprofilesrc}`} alt="Profile photo" />
        <h1 id="presentation">Hi!, im <span className='ID'>{UserName}</span>, Web Developer Frontend</h1>
        
      </div>
    </section>
  );
}
