import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { fetchStudents } from "./services/api";
import OffcanvasNavbar from "./components/common/Navbar";


function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const studentData = await fetchStudents();
      setStudents(studentData);
    };

    getStudents();
  }, []);

  return (
    <Router>
      <OffcanvasNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              students={students}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
