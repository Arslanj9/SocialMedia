import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import PostsProvider from './store/posts_store'

function App() {

  return (
    <PostsProvider>
    <div className='app-container'>
      <Sidebar />
      <div className='content'>
        <Header />
          {/* { selectedTab === "HOME" ? <Posts /> : <CreatePost /> } */}
          <Posts />
          <CreatePost />
        <Footer />
      </div> 
    </div>
    </PostsProvider>
  )
}

export default App
