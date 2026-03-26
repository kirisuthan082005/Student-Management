import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Dash from './Component/Dash/Dash'
import Home from './Component/Home/Home'
import Listmanagement from './Component/Studentsmanagementlist/Listmanagement'
import PaymentDetails from './Component/PaymentDetails/PaymentDetails'
import StudentsAttendance from './Component/StudentsAttendance/StudentsAttendance'
import Announcements from './Component/Announcements page/Announcements'
import Exammanagement from './Component/Exammanagement page/Exammanagement'


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Dash />
      <Listmanagement />
      <PaymentDetails />
      <StudentsAttendance />
      <Announcements/>
      <Exammanagement/>

    




    </>
  )
}

export default App
