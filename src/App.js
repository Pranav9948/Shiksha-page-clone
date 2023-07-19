
import './App.css';
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


     

    </div>
  );
}

export default App;
