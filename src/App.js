import './App.css';
import { studentData } from './data/data';
import Student from './data/Student';

function App() {
  let students = studentData

  return (
    <div>
      <Student students={students}/>
    </div>
  );
}

export default App;
