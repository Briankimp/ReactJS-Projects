
import React, {useState, useEffect} from "react";
import "./App.css";

function App () {
   const [items, setItems] = useState([]);
   const [DataisLoaded, setDataisLoaded] = useState([false]);

    useEffect(() => {
      const timer = setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) =>{
          setItems(json);
          setDataisLoaded(true);
        });
      }, 2000);  

      return () => clearTimeout(timer);
    }, [])
   
      

    if (!DataisLoaded) 
      return (
        <div>
          <h1> Data is Loading, Please Wait..</h1>
        </div>
      );
      
 
      return (
            <div className="App">
                <h1 className="pname">React API Integration</h1>
                <h3>Fetch data from an api in react</h3>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.username},
                                </div>
                                <div>
                                    Full_Name: {item.name},
                                </div>
                                <div>
                                    User_Email: {item.email}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
 
export default App