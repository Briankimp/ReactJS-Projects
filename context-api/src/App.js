 import { useState } from "react";
import Profile from "./components/profile"; 
import Login from "./components/Login";
import UserContextProvider from "./Context/UserContextProvider";


function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <div className="App">
        <h1>React Program for Context API</h1>
        <Login/>
        <Profile/>
     </div>
    </UserContextProvider>
    
  );
}

export default App;
