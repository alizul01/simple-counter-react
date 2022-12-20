import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

const App = () => {
  const [counter, setCounter] = useState(0)

  const handlePlus = () => {
    setCounter(counter + 1);
  }

  const handleMin = () => {
    setCounter(counter - 1);
  }

  return (
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "100%",
      }}>
          <h1>Counter App</h1>
          <div style={{
              fontSize: "2rem"
          }}>
              {counter}
          </div>

          <div style={{
              display: "flex",
              gap: "1rem",
          }}>
              <button style={{
                  padding: "1rem",
                  backgroundColor: "green",
                  fontSize: "1rem",
                  color: "white",
                  marginTop: "10vh",
                  borderRadius: "2rem",
                  cursor: "pointer",
                  border: "none"
              }} onClick={handlePlus}>Increase</button>
              <button style={{
                  padding: "1rem",
                  backgroundColor: "red",
                  fontSize: "1rem",
                  color: "white",
                  marginTop: "10vh",
                  borderRadius: "2rem",
                  cursor: "pointer",
                  border: "none"
              }} onClick={handleMin}>Decrease</button>
          </div>
      </div>
  )
}

export default App;
