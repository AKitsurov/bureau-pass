import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

const Signupform = () => {

  const [login, setLogin] = useLocalStorage("login", "Пользователь");



  return (

	  <form onSubmit={(e) => setLogin(login)}>

			<select 
			              id="login"
              placeholder="Вид"
onChange={(e)=>setLogin(e.target.value)} value={login}
			  >
  <option selected value="Пользователь" >Пользователь</option>
  <option>Админ</option>
  <option>Согласующий</option>
</select>
	              <br></br>

      <input type="submit" value="Войти"></input>
    </form>


		
  );
};

export default Signupform;