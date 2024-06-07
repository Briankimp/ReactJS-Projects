import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [items, setItems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
      setDataisLoaded(true);
    } catch (error) {
      setError(error.message);
      setDataisLoaded(true);
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 2000); 

  
    return () => clearTimeout(timer);
  }, []);


  if (!DataisLoaded) {
    return (
      <div>
        <h1>Please wait some time...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }


  return (
    <div className="App">
      <h1 className="pname">React API Integration</h1>
      <h3>Fetch data from an API in React</h3>
      <div className="container">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <ol>
              <div>
                <strong>User_Name: </strong>
                {item.username}
              </div>
              <div>Full_Name: {item.name}</div>
              <div>User_Email: {item.email}</div>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
