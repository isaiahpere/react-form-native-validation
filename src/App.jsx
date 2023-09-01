import { useState } from "react";
import "./App.css";

import FormInput from "./components/FormInput";
import { inputs } from "./data";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Grab form values without rendering component
    /*
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    */
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            name={input.name}
            placeholder={input.placeholder}
            label={input.label}
            type={input.type}
            value={values[input.name]}
            onValueChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
