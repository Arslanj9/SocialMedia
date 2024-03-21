import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='app-container'>
      <Sidebar />
      <div className='content'>
        <Header />
        <Footer />
      </div> 
    </div>
  )
}

export default App
