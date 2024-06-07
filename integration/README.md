# API INTEGRATION

This is an Application to demonstrate the use of an API to fetch data from server.

## Lessons Learnt

The use of fetch method to get the data from server, use (.then((res) => res.json()) ) to convert the response given, into JSON.
.then((json) => { this.setState({...})}) to update the state with the fetced data.  

I have used conditional rendering to display loading message

## How to use

 Run the code
 A page with data fom (<https://jsonplaceholder.typicode.com/users>) will show.
  