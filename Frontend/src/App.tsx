import './App.css'
import { Routes, Route } from "react-router-dom";
import Form from './pages/Form'
import Users from './pages/Users';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Form />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  )
}

export default App
