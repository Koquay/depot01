import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const RadioButton = (
    {
        id,
        name,
        value,
        onChange,
        checked,
        label,
        image,
        width
    }) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />

            <label className="form-check-label" htmlFor={id}>
                {image && <img alt="blank" className="img-fluid" src={image} style={{ width: width }} />}
                {label && <label className="form-check-label" htmlFor={id}>{label}</label>}
            </label>
        </div>
    );
};

// RadioButton.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   info: PropTypes.string,
//   error: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
//   options: PropTypes.array.isRequired
// };

export default RadioButton;
