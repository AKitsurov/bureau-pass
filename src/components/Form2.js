import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { View } from './View';


const Form2 = () => {
  const [name, setName] = useLocalStorage("name2", "");
  const [checked, setChecked] = useLocalStorage("checked", false);
  
  
  
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
  
  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (

	
		    <div className='wrapper'>
      <h1>Создать заявку</h1>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Author</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <br></br>
            <label>ISBN#</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
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

export default Form2;