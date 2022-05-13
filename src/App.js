import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Home from "./pages/home";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <Login />
              </Suspense>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <Home />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
