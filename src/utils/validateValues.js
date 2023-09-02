// validate values and return true or false

export const validateValues = (values) => {
  // destructuring values
  const { username, email, birthday, password, confirmPassword } = values;

  // here is where regex expressions will be used to validate the values
  if (
    username.length < 2 ||
    email.length < 2 ||
    birthday.length === "" ||
    password.length < 2 ||
    confirmPassword.length < 2
  ) {
    return false;
  }
  return true;
};
