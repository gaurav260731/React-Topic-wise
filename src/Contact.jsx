import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

function Contact(props) {
    const {fname} = useParams();
    const location = useLocation();
    const history = useHistory();

    return (
        <div className="routing">
            <p>In {props.name} Page with param {fname} and full param is {location.pathname}
            {location.pathname==="/contact/xxxx"?<button onClick={()=> history.push('/contact')}>Contact Page</button>:''}</p>
            <h1>Routing Concept</h1>
            <h3>This is contact Page.</h3>
        </div>
    )
}

export default Contact;