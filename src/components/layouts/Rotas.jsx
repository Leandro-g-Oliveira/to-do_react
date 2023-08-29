import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Edit from "../pages/Edit.jsx";

function Rotas () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </Router>
  )
}
export default Rotas;