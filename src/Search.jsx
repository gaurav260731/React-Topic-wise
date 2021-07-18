import React from 'react';
import SetImage from './SetImage';
import TextField from '@material-ui/core/TextField';
import caveThink from './thinking-caveman.svg';

const Search = ()=> {
    const [name, setName] = React.useState("");

    const inputName = (e) => {
        setName(e.target.value);
    }

    return (
        <>
          <img src={caveThink} alt="caveThink" width="200" height="200"/>
          <div style={{display:'flex', flexDirection:'column', margin: '10px'}}>
            <TextField id="standard-basic" label="Search for Images" value={name} onChange={inputName}/>
            {name !==''?<SetImage val={name}/>:''}
          </div>

        </>
    )

}

export default Search;