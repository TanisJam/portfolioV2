import React, { useState } from "react";
import validate from "./helpers/validator";
import { Modal, Overrlay } from "./StyledComponents";

export default function Contact({ show }) {
  const [errors, setErrors] = useState({});
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setDataForm((state) => {
      const data = e.target.value;
      return {
        ...state,
        [e.target.name]: data,
      };
    });
    setErrors((state) => {
      return validate({
        ...dataForm,
        [e.target.name]: e.target.value,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0){
      alert('Check your data!')
    } else {
      e.target.submit();
      show()
    }
  };

  return (
    <>
      <Overrlay onClick={(e) => show()}></Overrlay>
      <Modal>
        <form
          target="_blank"
          action="https://formsubmit.co/06fb0e214b1bb26105e66f4755efbc69"
          method="POST"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2>Contact</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => handleInputChange(e)}
              autoFocus
            />

            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              onChange={(e) => handleInputChange(e)}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
}
