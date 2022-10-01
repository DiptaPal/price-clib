import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import AssignmentsMarks from './components/AssignmentsMark/AssignmentsMarks';
import PhoneBar from './components/AssignmentsMark/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='my-6'>
        <h1 className='text-4xl font-bold underline'>This is a big header</h1>
        <p className='pb-4'>This is just a paragraph</p>
      </div>
      <Pricing></Pricing>
      <AssignmentsMarks></AssignmentsMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
