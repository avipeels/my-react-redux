import React, { PropTypes } from 'react';
const SelectInput = (props) => {

    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                    <select
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        className="form-control">
                        <option value="">{props.defaultOption}</option>
                        {props.options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })}
                    </select>
                
                {props.error && <div className="alert alert-danger">{props.error}</div>}
            </div>
        </div>
    );
};
SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};
export default SelectInput;