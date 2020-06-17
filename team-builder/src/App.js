import React,{useState}  from 'react';
import './App.css';
import Form from './Components/Form';
import { v4 as uuid } from 'uuid';
import TeamList from './Components/TeamList';

const intialTeamList =[
  {
    id: uuid(),
    username: 'Emily',
    email: 'emilme@emilyou.com',
    role: 'Student',
  },
]

const intialFormValues = {
  name:'',
  email:'',
  role:''
}
 
function App() {
  const [teamMember, setTeamMember] = useState(intialTeamList);
  const [error, setError] = useState('')
  
  const [formValues , setFormValues] = useState(intialFormValues);

  const onInputChange = event =>{
    const {name , value} = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })

  }

  const onSubmit = event =>{
    event.preventDefault();

    if (!formValues.username || !formValues.email || !formValues.role) {
      setError('You need to fill out all the info')
      return
    }
    setError('')//why do I need this?

    const newMember = {
      id: uuid(), 
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    setTeamMember(teamMember=> [newMember, ...teamMember])
    setFormValues(intialFormValues)
  }


  return (
    <div className="App">
      <header><h1>Team</h1></header>
      <span style={{ color: 'red' }}>{error}</span>
      <Form
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      />

      {teamMember.map(member =>{
        return(<TeamList key={member.id} details={member}/>)
      })}
      
    </div>
  );
}

export default App;
