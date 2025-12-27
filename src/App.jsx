import './App.css'
import Employees from './components/employees/Employees'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className='min-h-screen w-full flex flex-col'>
      <Navbar/>

      <div className='flex-1 py-10'>
        <Employees/>
      </div>

      <Footer/>

    </div>
  )
}

export default App
