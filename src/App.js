import './App.css';
import BarChart from './bar';
import DoughnutChart from './dough';
import LineChart from './line';
import Khart from './chart';
import Pie from './pie';
function App() {
  return (
    <div className="App">
      <BarChart /> 
       <DoughnutChart />
       <LineChart /> 
       <Pie/>
      <Khart/>
    </div>
  );
}

export default App;
