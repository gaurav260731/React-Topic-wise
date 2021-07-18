import React from 'react';

function Image(props){
    if (props.imgSrc !== ""){
        return (
            <img src={props.imgSrc} alt="random images"/>
        )
    }else{
        return(
            <img src="https://picsum.photos/200/300" alt="random images"/>
        )
    }


}

export default Image