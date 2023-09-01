import "./formInput.css";

const FormInput = ({
  label,
  onValueChange,
  name,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onValueChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;
