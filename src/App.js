import logo from './logo.svg';
import Counter from './features/counter/counter'
import Counter2 from './features/counter/counter2'
import GetStateComponent from './features/counter/getStateComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter /><br /><br /><br />
      <Counter2 /><br /><br /><br />
      <GetStateComponent />
    </div>
  );
}

export default App;
