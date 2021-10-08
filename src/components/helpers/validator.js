export default function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "name is required";
  }
  if (!input.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "email is invalid";
  }
  if (!input.message) {
    errors.message = "message is required";
  }
  return errors;
}
