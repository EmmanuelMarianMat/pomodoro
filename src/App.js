import './App.css';
import MyTimer from './components/Timer';
function App() {
  
  
  const time = new Date();
  time.setSeconds(time.getSeconds()+25*60/100);
  return (
    <div className="App">
      <header className="App-header">
        <MyTimer expiryTimestamp={time}/>
      </header>
    </div>
  );
  }

export default App;
