import React from 'react';

const SetImage = (props) => {
    const image=`https://source.unsplash.com/500X400/?${props.val}`;
    return(
        <>
          <img src={image} alt="search" width="300" height="300" style={{borderRadius: '10px', marginTop:'10px', boxShadow : '3px 2px 5px 2px grey'}}/>
        </>
    )
}
 
export default SetImage;