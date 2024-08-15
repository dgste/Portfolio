import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TachnologiesContainer from './TachnologiesContainer';



function MainContent() {
  
    return (
      <main id='main-content'>
        <AboutContainer/>
        <TachnologiesContainer/>
        <ProjectsContainer/>
      </main>
    )
  }
  
  export default MainContent