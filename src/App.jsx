import './App.css'
import EmployeePopup from './components/employeePopup/EmployeePopup'
import DeletePopUp from './components/deletePopup/DeletePopup'
import Employees from './components/employees/Employees'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getEmployees } from './store/features/employee/employee.thunk'

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getEmployees())
  },[])

  return (
    <div className='min-h-screen w-full flex flex-col'>
      <EmployeePopup/>
      <DeletePopUp/>
      <Navbar/>

      <div className='flex-1 py-10'>
        <Employees/>
      </div>

      <Footer/>

    </div>
  )
}

export default App
