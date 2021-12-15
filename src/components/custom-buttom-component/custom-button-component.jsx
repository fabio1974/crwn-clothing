import React from 'react';
import './_custom-button-component.scss'

function CustomButtonComponent({children,...otherProps}) {
    return (
        <button className={'custom-button'} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButtonComponent;
