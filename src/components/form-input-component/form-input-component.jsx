import React from 'react';
import './_form-input-component.scss';


function FormInputComponent({handleChange, label, ...otherProps}) {

    return (
        <div className={"group"}>
            <input className={'form-input'} onChange={handleChange} {...otherProps} />
            {
                label?<label className={`${otherProps.value.length?'shrink':''} form-input-label` }>{label}</label>:null
            }
        </div>
    );
}

export default FormInputComponent;
