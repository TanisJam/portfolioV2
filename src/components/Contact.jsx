import React from "react";
import { Modal } from "./StyledComponents";

export default function Contact() {

  return (
    <Modal>
      <form
        target="_blank"
        action="https://formsubmit.co/06fb0e214b1bb26105e66f4755efbc69"
        method="POST"
      >
        <h2>Contact</h2>
        <div className="form-group">
          <input id="name" type="text" name="name" placeholder="Name" />

        </div>
        <div className="form-group">
          <input id="email" type="email" name="email" placeholder="Email" />
          
        </div>

        <div className="form-group">
          <textarea id="message" name="message" placeholder="Message" />
         
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </Modal>
  );
}
