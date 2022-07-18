import './App.css';
import Header from './components/header';
import Section1 from './components/section1';
import Features from './components/features';
import Jobori from './components/jobori';
import Busori from './components/busori';
import Lancou from './components/lancou';
import Fit from './components/fit';
import Stutest from './components/stutest';
import Footer from './components/footer';
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Section1></Section1>
      <Features></Features>
      <Jobori></Jobori>
      <Busori></Busori>
      <Lancou></Lancou>
      <Fit></Fit>
      <Stutest></Stutest>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
