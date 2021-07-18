import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import listImg from './list.svg';

function TodoList() {
    const [list, setList] = useState([]);
    const [finalList, setFinalList] = useState('');

    function setlistValue(e) {
        setFinalList(e.target.value);
    }
    const i = 0;
    const onSubmit=()=> {
        setList([
            ...list,
            {
                name:finalList
            }
        ])
        setFinalList('')
    }

    function removeList(name) {
        let result = list.filter((val)=> val.name !== name);
        console.log(result);
        setList(result);
    }

    return(
        <>
            <img src={listImg} alt="list" width="200" height="180" style={{position:'absolute', left:'60%'}}/>
            <div className="list-container">
                <TextField label="Add the list" id="listName" value={finalList} onChange={setlistValue}/>
                <Button variant="contained" color="primary" onClick={onSubmit} style={{marginLeft: '10px'}}>Submit</Button>
            </div>
            
            {/* <div>{finalList}</div> */}
            <ul style={{position: "relative", right: "7%", marginTop: "25px"}}>
                {
                    list.map(val=>(
                        <li key={val.name}>{val.name}   <i className="fa fa-times colorred" onClick={()=>removeList(val.name)} style={{marginTop: '10px'}}></i></li>
                        
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList;