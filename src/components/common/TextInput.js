import React, { PropTypes } from 'react';
const TextInput = (props) => {
    let wrapperClass = 'form-group';
    if (props.errors && props.errors.length > 0) {
        wrapperClass += " " + 'has-error';
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input type="text"
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                {props.errors && <div className="alert alert-danger">{props.errors}</div>}
            </div>
        </div>
    );
};
TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    errors: PropTypes.string
};
export default TextInput;