/**
 * Created by sravankumarganji on 10/9/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

function TextInput({name,label,onChange,placeHolder,value,error}) {
    return (
        <div>
            <input type="text"
               name={name}
               placeholder={placeHolder}
               value={value}
               onChange={onChange}
            />
        </div>
    );
}

TextInput.propTypes = {};
TextInput.defaultProps = {};

export default TextInput;
