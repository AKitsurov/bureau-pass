import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { View } from './View';

const Form3 = () => {


const getDatafromLS1=()=>{
  const data1 = localStorage.getItem('requests');
  if(data1){
    return JSON.parse(data1);
  }
  else{
    return []
  }
}

const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

  // main array of objects state || books state || books array of objects
const [books, setbooks]=useState(getDatafromLS());
const [requests, setrequests]=useState(getDatafromLS1());


  // input field states
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [isbn, setIsbn]=useState('');

 // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      title,
      author,
      isbn
    }
    setbooks([...books,book]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  }


  return (
        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ISBN#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
								              <th>{requests.length}</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books}/>
                </tbody>
              </table>

            </div>
           
          </>}
          {books.length < 1 && <div>No books are added yet</div>}
        </div>
  );
};

export default Form3;