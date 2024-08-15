import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './styles/components/app.sass'

function App() {
  

  return (
    <>
      <div id="portfolio" >
        <h2>Douglas Rocha</h2>
        <Sidebar/>
        <MainContent/>
      </div>
    </>
  )
}

export default App
