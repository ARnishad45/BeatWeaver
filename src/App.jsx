import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Albumb from './pages/Albumb'

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/albumb/:id' element={<Albumb />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
