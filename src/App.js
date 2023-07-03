import './App.css';
import BookingPage from './Screens/BookingPage';
import HomePage from './Screens/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <> 
        <Routes>
              <Route exact path="/" element={<HomePage/>}></Route>
               <Route path="/booking" element={<BookingPage/>}></Route>
        </Routes>
    </>
  );
}

export default App;
