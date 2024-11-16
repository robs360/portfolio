
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
function App() {
 
  // https://portfolio-a6968.web.app
  return (
     <div className=''>
      <Nav className='hidden'></Nav>
        <Outlet></Outlet>
     </div>
  )
}

export default App
