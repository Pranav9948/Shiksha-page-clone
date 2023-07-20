
import './App.css';
import MainFooter from './components/Footer/MainFooter';
import MiniFooter from './components/Footer/MiniFooter';
import SubFooter from './components/Footer/SubFooter';
import DekstopNav from './components/Navbar/DekstopNav';

import OnlineEducationModal from './components/Sections/OnlineEducationModal/OnlineEducationModal';
import SmallNavbar from './components/Sections/SmallNavbar/SmallNavbar';
import SidebarMainbarLayout from './components/SidebarMainbarLayout';

function App() {
  return (
    <div className="App">
      
      <DekstopNav/>
        <OnlineEducationModal/>
          <SmallNavbar/>

        <SidebarMainbarLayout/>

        <MiniFooter/>
        <MainFooter/>
        <SubFooter/>


     

    </div>
  );
}

export default App;
