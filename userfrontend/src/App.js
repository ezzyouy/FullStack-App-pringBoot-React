import logo from './logo.svg';
import './App.css';
import MyAppBar from './component/MyAppBar';
import User from './component/User';

function App() {
  return (
    <div className="App">
		  <MyAppBar />
		  <User/>
    </div>
  );
}

export default App;
