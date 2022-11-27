import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { ViewReq } from './ViewReq';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
	import ReqList from '../pages/reqlist';
	import { useNavigate } from "react-router-dom";


const Form4 = () => {
  const navigate = useNavigate();

  
  
  
const getDatafromLS=()=>{
  const data = localStorage.getItem('requests');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}


  // main array of objects state || requests state || Requests array of objects
const [requests, setrequests]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [justification, setJustification]=useState('');
  const [id, setId]=useState(requests.length+1);
  const [condition, setCondition]=useState('Рассматривается');
  const [pass, setPass]=useState('Основной');


 // form submit event
  const handleAddRequestSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let request={
      name,
      justification,
      id,
	  condition,
	  pass
    }
    setrequests([...requests,request]);
    setName('');
    setJustification('');
    setId('');
	setCondition('');
	setPass('');


  }
  
  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('requests',JSON.stringify(requests)); 	
  },[requests])

  return (

	
		    <div className='wrapper'>
      <h1>Создать заявку</h1>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddRequestSubmit}>
            <label>ФИО: </label>
			<br></br>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Обоснование: </label>
			<br></br>
            <input type="text" className='form-control' required
            onChange={(e)=>setJustification(e.target.value)} value={justification}></input>
            <br></br>
            <label>Вид пропуска: </label>
						<br></br>

			<select 
			              id="pass"
              placeholder="Вид"
onChange={(e)=>setPass(e.target.value)} value={pass}
onSubmit={(e)=>setPass("Основной")} value={pass}

			  >
  <option selected value="Основной" >Основной</option>
  <option>Временный</option>
</select>

                        <br></br>

            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>



      </div>
    </div>

		
  );
};

export default Form4;