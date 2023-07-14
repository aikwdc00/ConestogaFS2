/**
 * Group members as below: 
 * Chelsa, Patel
 * Fu-Ting, Li
 * Jijo, Raju
 * Stuti Dilipbhai, Jayswal
 */


import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Layout from './components/Layout'
import Home from './pages/Home'
import Detail from './pages/Detail'
import AddEmployee from './pages/Add'


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route path="/" element={< Navigate replace to="home" />} />
          <Route path="home" element={<Home />} >
            <Route path=":filterType" element={<Home />} />
          </Route>
          <Route path="create" element={<AddEmployee />} />
          <Route path=":employeeId" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
