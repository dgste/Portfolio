import Avatar from '../img/WhatsApp Image 2024-08-15 at 14.39.09.jpeg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetwork from './socialnetwork';

function Sidebar() {
  
    return (
      <aside id="sidebar">
        <img src={Avatar} alt='Douglas Rocha' width='250px' height='250px'/>
        <p className="title">Desenvolvedor Web </p>
        <SocialNetwork/>
        <InformationContainer/>
        

      </aside>
    )
  }
  
  export default Sidebar