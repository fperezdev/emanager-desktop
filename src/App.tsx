import { useState } from "react";
import "./App.css";

function App() {
  const [showEmanager, setShowEmanager] = useState(false);

  console.log(showEmanager);

  const handleShowEmanager = () => {
    window.ipcRenderer.send("open-auth-window");
    setShowEmanager(true);    
  };

  return (
    <>
      {!showEmanager ? (
        <button onClick={handleShowEmanager}>Show me the money</button>
      ) : (
        <p>EMANAGER</p>
      )}
    </>
  );
}

export default App;
