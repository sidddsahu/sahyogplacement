
import './App.css'
import Header from './components/Layout/Header'
import './assets/css/font-awesome-all.css';
import './assets/css/flaticon.css';
import './assets/css/owl.css';
import './assets/css/bootstrap.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/animate.css';
import './assets/css/color.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import Footer from './components/Layout/Footer';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import PlaceJob from './components/Placejob';
import ApplyNow from './components/ApplyNow';
import Faq from './components/Faq';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import JobOpenings from './components/JobOpenings';
import JobDetails from './components/JobDetails';
import TemporaryStaffing from './components/TemporaryStaffing';
function App() {


  return (
    <div className="App">

      <BrowserRouter>  
      <Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/placejob" element={<PlaceJob />} />
  <Route path="/applynow" element={<ApplyNow />} />
  <Route path="/faq" element={<Faq />} />
  <Route path="/register" element={<RegistrationForm />} />
  <Route path="/login" element={<LoginForm />} />
  <Route path="/job-openings" element={<JobOpenings />} />
  <Route path="/job-details" element={<JobDetails />} />
  <Route path="/temporary" element={<TemporaryStaffing />} />






</Routes>
<Footer />
</BrowserRouter>

    </div>
  )
}

export default App
