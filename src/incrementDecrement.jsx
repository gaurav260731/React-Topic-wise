import React from 'react';
import Button from '@material-ui/core/Button';

const initialState = 0;

const reducer = (state,action)=>{
    if (action.type === "Increment"){
            return state+1
    }else{
        return state-1;
    }
}

const IncrementDecrement = ()=>{

    const [state,dispatch] = React.useReducer(reducer,initialState)
    return (
        <>
            <p>{state}</p>
            <div style={{display:'flex', flexDirection:'row', padding:'5px'}}>
                <Button variant="contained" color="primary" onClick={()=>dispatch({type:"Increment"})}>Increment</Button>
                <Button variant="contained" color="primary" onClick={()=>dispatch({type:"Decrement"})} style={{marginLeft: '5px'}}>Decrement</Button>
            </div>
        </>
    )

}

export default IncrementDecrement;