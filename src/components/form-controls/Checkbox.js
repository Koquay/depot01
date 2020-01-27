import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Checkbox = (
    {
        id,
        name,
        value,
        onChange,
        checked,
        label
    }) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input inline-block"
                type="checkbox"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label inline-block" htmlFor={id}>{label}</label>
        </div>
    );
};

// Checkbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   info: PropTypes.string,
//   error: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
//   options: PropTypes.array.isRequired
// };

export default Checkbox;
