import React from 'react';
import './_custom-button-component.scss'

function CustomButtonComponent({children,isGoogleSignIn,...otherProps}) {
    return (
        <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButtonComponent;
