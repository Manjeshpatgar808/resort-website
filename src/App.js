// import logo from './logo.svg';
// import './App.css';

import Header from "./componet/Header"
import HomepageBanner from "./componet/HomepageBanner";

import Bodysection from "./componet/Bodysection";
import Accomodation from "./componet/Accomodation";
import Service from "./componet/Service";
import Localattraction from "./componet/Localattraction";

function App() {
  return (
    <div className="App">

      <Header />
    <HomepageBanner/>
     <Bodysection/>
     <Accomodation/>
     <Service/>
     <Localattraction/>
    

    </div>
  );
}

export default App;
