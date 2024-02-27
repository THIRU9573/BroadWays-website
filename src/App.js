import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'; 
import Welcome from './Pages/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome /> 
      <Footer />
    </div>
  );
}

export default App;
