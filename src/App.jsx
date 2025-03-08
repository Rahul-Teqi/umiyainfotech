import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import MagnetLines from "./components/hooks/MagnetLines";

function App() {
  const [loading, setLoading] = useState(true);
  const [zoomOut, setZoomOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener("load", () => setLoading(false));
      setLoading(false); // Fallback in case load event doesn't trigger
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      setZoomOut(true);
    }
  }, [loading]);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="loading-screen" style={{
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          height: "100vh", 
          position: "relative"
        }}>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
            }}
          >
            <MagnetLines
              rows={20}
              columns={20}
              containerSize="60vmin"
              lineColor="grey"
              lineWidth="0.1vmin"
              lineHeight="3vmin"
              baseAngle={0}
              style={{
                margin: "2rem auto",
                width: "100%",
                height: "100%",
                margin: "0",
              }}
            />
          </div>

          <img 
            src="/header/umiyMaa.png" 
            height="300px" 
            style={{
              marginTop: "-70px", 
              transform: zoomOut ? "scale(0)" : "scale(1.1)",
              transition: "transform 1s ease-in-out",
              animation: "pulse 1s infinite alternate"
            }} 
          />

          <style>
            {`
              @keyframes pulse {
                0% { transform: scale(1); }
                100% { transform: scale(1.1); }
              }
            `}
          </style>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;