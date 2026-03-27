import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Dash from "./Component/Dash/Dash";
import Listmanagement from "./Component/Studentsmanagementlist/listmanagement";
import StudentsAttendance from "./Component/StudentsAttendance/StudentsAttendance";
import PaymentDetails from "./Component/PaymentDetails/PaymentDetails";
import Announcements from './Component/Announcements page/Announcements'
import Exammanagement from './Component/Exammanagement page/Exammanagement'


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/students" element={<Listmanagement />} />
        <Route path="/add-student" element={<><StudentsAttendance /><Exammanagement /></> } />
        
        <Route path="/contact" element={<><PaymentDetails /><Announcements /></>} />
        
      </Routes>
      
      
     
    
    </Router>
    
    );}





  

export default App;