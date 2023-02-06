import './App.css';
import Navbar from './components/Navbar/Navbar';
import Scrappers from './components/Scrappers/Scrappers';
import Login from './pages/Login/Login';
import {Routes, Route} from "react-router-dom"
import Signup from './pages/Signup/Signup';
import PhoneScrapper from './pages/Scrappers/Phone/PhoneScrapper';
import Instagram from './pages/Scrappers/Instagram/Instagram';
import LinkedIn from './pages/Scrappers/LinkedIn/LinkedIn';
import Twitter from './pages/Scrappers/Twitter/Twitter';
import Facebook from './pages/Scrappers/Facebook/Facebook';
import ProtectedRoute from './routes/ProtectedRoute'
function App() {

  return (
      <div className="sections">
          <Navbar/>
          <Routes>
            {/************ Auth/Login/signup routes **************/}

            <Route exact path = "/login" element = {<Login/>}></Route>
            <Route exact path = "/signup" element = {<Signup/>}></Route>

            {/************ protected routes **************/}

            <Route exact path = "/" element = {<ProtectedRoute component = {Scrappers}/>}/>
            <Route exact path = "/scrape/phone" element = {<ProtectedRoute component = {PhoneScrapper}/>}/>
            <Route exact path = "/scrape/instagram" element = {<ProtectedRoute component = {Instagram}/>}/>
            <Route exact path = "/scrape/linkedin" element = {<ProtectedRoute component = {LinkedIn}/>}/>
            <Route exact path = "/scrape/twitter" element = {<ProtectedRoute component = {Twitter}/>}/>
            <Route exact path = "/scrape/facebook" element = {<ProtectedRoute component = {Facebook}/>}/>
            {/* <Route exact path = "/test" element = {<ProtectedRoute component = {test} id = "900"/>}/> this is to pass props*/}
            
            
          </Routes>
      </div>
  );
}

export default App;
