import React from 'react';

const useCustomHook = (count) => {
    React.useEffect(()=> {
        alert('I am clicked');
        document.title = `you clicked me ${count} times`; 
    })
}

export default useCustomHook;