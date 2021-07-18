import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';


const Form = () =>{
    // const [name, setName] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [lastNameNew, setLastNameNew] = useState("");

    const [name, setName] = useState({
        fname: "",
        lname: ""
    })

    const [finalName, setFinal] = useState( {
        finalFname: "",
        finalLname:""
    })

    const inputName = (event)=> {
        //setName(event.target.value);
        // if(event.target.name === "firstname") {
        //     setName({
        //         fname: event.target.value,
        //         lname: name.lname
        //     })
        // }else {
        //     setName({
        //         fname: name.fname,
        //         lname: event.target.value
        //     })
        // }

        setName( (val) => {
            return {
                ...val,
                [event.target.name] : event.target.value
            }
        })
       
    }
    
    // const inputLastName = (event) => {
    //     //setLastName(e.target.value)
    //     console.log(event.target.value);
    //     setName ({
    //         fname:event.target.value.fname,
    //         lname: event.target.value.lname
    //     })
    // }
    
    // const onSubmit = (e) => {
    //     // setFirstName(name);
    //     // setLastNameNew(lastName);
    //     e.preventDefault();
    // }

    const onSubmit = (e) => {
        if(e.target.name === "firstname") {
            setFinal({
                finalFname: name.fname,
                finalLname: name.lname
            })
        }else {
            setFinal({
                finalFname: name.fname,
                finalLname: name.lname
            }) 
        }
        e.preventDefault();
        
    }
    
    
    return (
        <form>
            <div>
                <h4>2 Way Binding {name.fname} {name.lname}</h4>
            </div>
            <div>
                <h3>After submit {finalName.finalFname} {finalName.finalLname}</h3>
            </div>
            <div className="padding4"><TextField id="standard-basic" name="fname" label="First Name" value={name.fname} onChange={inputName}/></div>
            <div className="padding4"><TextField id="standard-basic" name="lname" label="Last Name" value={name.lname} onChange={inputName}/></div>
            <button onClick={onSubmit}>Submit</button>
        </form>
    );

}

export default Form;



