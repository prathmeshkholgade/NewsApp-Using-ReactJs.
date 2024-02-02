
import { Provider } from 'react-redux'
import DisplayBox from './Components/DisplayBox'
import NavBar from './Components/NavBar'
import { store } from './app/store'

function App() {


  return (
    <>
    <Provider store={store}>
     <NavBar/>
     <DisplayBox/>
     </Provider>
    </>
  )
}

export default App
