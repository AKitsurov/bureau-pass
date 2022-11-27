import { useState, useEffect } from "react";
import { ViewReq } from './ViewReq';

const Form5 = () => {


const getDatafromLS=()=>{
  const data = localStorage.getItem('requests');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

  // main array of objects state || requests state || requests array of objects
const [requests, setrequests]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [justification, setJustification]=useState('');
  const [id, setId]=useState('');
  const [condition, setCondition]=useState('');
  const [pass, setPass]=useState('');

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
  
    // delete request from LS
  const deleteRequest=(id)=>{
    const filteredRequests=requests.filter((element,index)=>{
      return element.id !== id
    })
    setrequests(filteredRequests);
  }


  return (
        <div className='ViewReq-container'>
          {requests.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>ФИО</th>
                    <th>Обоснование</th>
                    <th>Состояние</th>
                    <th>Вид пропуска</th>
                  </tr>
                </thead>
                <tbody>
                  <ViewReq requests={requests} deleteRequest={deleteRequest}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setrequests([])}>Remove All</button>
          </>}
          {requests.length < 1 && <div>No requests are added yet</div>}
        </div>
  );
};

export default Form5;