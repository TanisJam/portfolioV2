import React from "react";
import { Modal } from "./StyledComponents";

export default function Contact() {
  const [state, handleSubmit] = useForm("xknkekvy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Modal>
  );
}
