import { useState } from "react";

export default function forms() {
  let [formdata, setFormdata] = useState({
    fullname: "",
    password: "",
    email: "",
  });
  function ChangeFormData(event) {
    setFormdata((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  function handlesubmit(event) {
    event.preventDefault();
    console.log(formdata);
    setFormdata({ fullname: "", password: "", email: "" });
  }
  return (
    <>
      <h2>Your Form</h2>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">
          <strong>Fullname: </strong>
        </label>
        <input
          type="text"
          name="fullname"
          id="name"
          value={formdata.fullname}
          onChange={ChangeFormData}
        />

        <br />
        <br />
        <label htmlFor="password">
          <strong>Password: </strong>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formdata.password}
          onChange={ChangeFormData}
        />
        <br />
        <br />
        <label htmlFor="email">
          <strong>Email: </strong>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formdata.email}
          onChange={ChangeFormData}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
