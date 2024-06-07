# API INTEGRATION

This is an Application to demonstrate the use of an API to fetch data from server.

## Lessons Learnt

The use of fetch method to get the data from server, use (.then((res) => res.json()) ) to convert the response given, into JSON.
.then((json) => { this.setState({...})}) to update the state with the fetced data.  
 
I have used async function because of its simplicity.
Try-catch to catch and throw error message to the user.
The setTimout is just to simulate the loading message.

Useffect is used to render the component when the state is changed
I have used conditional rendering to display loading message

the map() function is used to render a list of components.


## How to use

 Run the code
 A page with data fom (<https://jsonplaceholder.typicode.com/users>) will show.
  