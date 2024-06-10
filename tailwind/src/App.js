import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-primary">ChitChat</div>
          <p className="text-blue-450">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
