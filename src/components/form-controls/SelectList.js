import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectList = (
  { name,
    value,
    error,
    info,
    onChange,
    options,
    label
  }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        className={classnames('form-control', {
          'is-invalid': error
        })}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option></option>
        {options}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

// SelectList.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   info: PropTypes.string,
//   error: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
//   options: PropTypes.array.isRequired
// };

export default SelectList;
