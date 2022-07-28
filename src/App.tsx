
import { Routes, Route } from 'react-router';
import About from './pages/About';
import Allproducts from './pages/Allproducts';


function App ()
{
  return (
    <>

      <Routes>
        <Route path="/" element={ <About /> } />
        <Route path="/allproducts" element={ <Allproducts /> } />
      </Routes>
    </>
  )
}

export default App;
