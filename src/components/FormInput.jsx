import { useState } from "react";

import "./formInput.css";

const FormInput = ({
  label,
  onValueChange,
  name,
  placeholder,
  type,
  value,
  errorMessage,
  inputRequired,
  pattern,
}) => {
  const [focused, setFocused] = useState(false);

  /**
   * handles input focus
   */
  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onValueChange}
        value={value}
        required={inputRequired}
        pattern={pattern}
        onBlur={handleFocus}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
