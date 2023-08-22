import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import BreakFix from './BreakFix';
import Request from './Request';
import EmailConfirm from './EmailConfirm';
import FormDetails from './Form';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/breakfix" element={<BreakFix />}></Route>
            <Route path="/request" element={<Request />}></Route>
            <Route path="/form/:id" element={<FormDetails />}></Route>
            <Route path="/emailconfirm" element={<EmailConfirm />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}


// npx json-server --watch forms/formType.json --port 8000

export default App;
