import React from "react";
const variants = {
    primary: {color:'red'},
    secondary: {height: '20px'},
};


const ButtonAtom = ({variant}) => {

    console.log(variants[variant])
    return(
        <div>
            <button type="" style={variants[variant]}>Explore</button>
        </div>
    );
};

export default ButtonAtom;