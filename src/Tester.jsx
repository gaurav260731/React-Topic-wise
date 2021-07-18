import React from 'react';
import {FirstName,LastName} from './index';

function Tester() {
    return (
        
        <>
        
        <FirstName.Consumer>
            {
                (fname)=> {
                    return ( 
                        <LastName.Consumer>
                        {
                                (lname)=> {
                                    
                                    return ( 
                                        <>
                                            <p>This is tester</p>
                                            <h2>Firstname is {fname}</h2>
                                            <h2> Lastname is {lname} </h2> 
                                        </>
                                        
                                    )
                                }
                            }
                        </LastName.Consumer>
                    )
                }
            }
           
        </FirstName.Consumer>
        
        </>
    )
}

export default Tester;