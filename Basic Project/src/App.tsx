import { useState } from 'react';
type Student={
  id:number;
  name:string;
};

const students:Student[]=[
  {id:1,name:"Riya"},{id:2,name:"Harini"}
];


const App=()=>{
  const [people,setPeople]=useState(students);
  return (
    <div>
     
     <button onClick={()=>setPeople([...students,{id:3,name:"Yogeshh"}])}>CLICK</button>
     <h1>Student Names</h1>
     {people.map((student)=>(<p key={student.id}>{student.name}</p>))}
    </div>
  );
  };
  export default App;
