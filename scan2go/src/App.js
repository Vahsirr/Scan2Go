
import './App.css';
import Customermain from './components/customermain';
import MobileAuthentication from './components/mobileauthentication';
import CustomerProductState from './context/customerproduct/CustomerProductState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer';
import Customernavbar from './components/customernavbar'
import Customeremailregistration from './components/customeremailregistration';
function App() {
  return (
    <CustomerProductState>
      <Router>
      <Customernavbar />
        <Routes>
          <Route exact path='/' element={<MobileAuthentication />}/>
           <Route exact path='/userpage' element={<Customermain />}/>
           <Route exact path='/user/customeremail' element={<Customeremailregistration/>}/>
        </Routes>
        <Footer/>
      </Router>

    </CustomerProductState>
  );
}

export default App;
