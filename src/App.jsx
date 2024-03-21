import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'

function App() {

  return (
    <div className='app-container'>
      <Sidebar />
      <div className='content'>
        <Header />
          <CreatePost />
          <Posts />
        <Footer />

      </div> 
    </div>
  )
}

export default App
