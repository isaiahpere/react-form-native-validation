export const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    label: "Username",
    pattern: "^([a-zA-Z0-9]){2,20}",
    errorMessage: "Username is required. Should be at least 2 characters",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "example@email.com",
    errorMessage: "Invalid email address",
    label: "Email",
    required: true,
  },
  {
    id: 3,
    name: "birthday",
    type: "date",
    placeholder: "Birdthday",
    errorMessage: "Birthday is required",
    label: "Birdthday",
    required: true,
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    errorMessage:
      "Password should be 8-20 characters. Should contain at least one letter, one digit and one special character",
    label: "Password",
    required: true,
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
    errorMessage: "Password does not match",
    required: true,
  },
];
