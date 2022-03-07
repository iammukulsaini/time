import React, { useState } from 'react';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const App = () =>{

  const [num, setNum] = useState(0)

  const incNum = () =>{
        setNum(num+1);
  };

  const decNum = ()=> {
    if (num> 0)
    {
    setNum(num-1);
    }else{
        alert('Get The F Out of Here')
        setNum(0);
    } 
   };


  return(
    <>
      <div className='main_div'>
      <div className='center_div'>
      <h1> {num} </h1>
      <div className='btn_div'>
      <Tooltip title="Add" arrow>
        <Button className='btn_g' variant="outlined"   onClick={incNum}><AddIcon/></Button>
        </Tooltip>
        <Tooltip title="Delete" arrow>
        <Button variant="outlined" className='btn_r' onClick={decNum}><RemoveIcon/></Button>
        </Tooltip>
        </div>


      </div>

      </div>
    </>
  );
};

export default App;