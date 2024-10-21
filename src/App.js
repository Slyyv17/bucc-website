import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Programs from "./components/Programs";
import Events from "./components/Events";
import Error from "./components/error"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/programs" element={< Programs />} />
          <Route path="/events" element={< Events />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
