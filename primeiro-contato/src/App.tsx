import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';
interface Person {
  name:string,
  age:number,
  hobby:string,
}

function App() {
  const [ person, setPerson ] = useState<Person>({} as Person)
  const [personList, setPersonList ] = useState <Person[]>([])
  const handleSubmit = (e:any) => {
    e.preventDefault()
    const {name, hobby, age} = person
    if( name !== undefined&& hobby!==undefined && age>0 ){
      setPersonList([...personList, person])
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <form>
        <Input 
          placeholder='Insira seu nome'
          label='Nome' 
          type='text'
          onChange={(e)=> setPerson({...person, name:e.target.value})}
        />
        <Input 
          placeholder='Insira sua idade'
          label='Idade'
          type='number'
          onChange={(e)=> setPerson({...person, age:Number(e.target.value)})}

        />
        <Input 
          placeholder='Insira seu hobby'
          label='Hobby'
          type='text'
          onChange={(e)=> setPerson({...person, hobby:e.target.value})}
        />

        <button onClick={handleSubmit}>Enviar</button>
        </form>
        <ul>
          {personList.map((person, index)=>(
            <Card key={ index } name={person.name} age={person.age} hobby={person.hobby}/>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
