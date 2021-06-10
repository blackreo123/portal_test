import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccButton from './AccButton';
import AccButtonSave from './AccButtonSave';
import AccSelect from './AccSelect';
import './App.css';
import ExpExpensesRequest from './ExpExpensesRequest';


function App() {

  const [show, setShow] = useState(false);
  
  return(
    <>
    <AccButton caption={'fdsafsfsdf'} onClick={()=>{setShow(true)}}></AccButton>
    <ExpExpensesRequest show={show} close={setShow}></ExpExpensesRequest>
    </>

  )
  
}

export default App;
