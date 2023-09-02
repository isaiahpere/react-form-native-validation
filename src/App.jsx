import { useState } from "react";
import "./App.css";

import { validateValues } from "./utils/validateValues";
import FormInput from "./components/FormInput";
import { inputs } from "./data";

const App = () => {
  // flag to prevent submission click if values not valid
  const [isFormValid, setIsFormValid] = useState(false);

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  /**
   * handles input changes
   */
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setIsFormValid(validateValues(values));
    console.log(validateValues(values));
  };

  /**
   * handles form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // check values are valid if not stop submission
    if (!validateValues(values)) return;

    console.log("Form Successfully submitted");

    //Grab form values without rendering component
    /*
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    */
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit} noValidate>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            name={input.name}
            placeholder={input.placeholder}
            label={input.label}
            type={input.type}
            value={values[input.name]}
            onValueChange={handleChange}
            errorMessage={input.errorMessage}
            inputRequired={input.required}
            pattern={input.pattern}
          />
        ))}
        <button type="submit" className={!isFormValid ? "disabled" : ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
