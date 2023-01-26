import './App.css';
import { studentData } from './data/data';
import Students from './data/Students';
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState(studentData)
  
  return (
    <div>
      <Students student={studentData}/>
    </div>
  );
}

export default App;
