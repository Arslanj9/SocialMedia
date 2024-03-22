import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import { useState } from 'react'

function App() {

  const [selectedTab, setSelectedTab] = useState("HOME")

  return (
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className='content'>
        <Header />
          { selectedTab === "HOME" ? <Posts /> : <CreatePost /> }
        <Footer />
      </div> 
    </div>
  )
}

export default App
