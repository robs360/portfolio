
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Background3D from './component/Background3D'
function App() {
 
  // https://portfolio-a6968.web.app
  return (
     <div className=''>
      <Background3D></Background3D>
      <Nav className='hidden'></Nav>
        <Outlet></Outlet>  
     </div>
  )
}

export default App
