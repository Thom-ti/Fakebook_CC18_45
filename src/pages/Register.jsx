import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [initialState, setInitialState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlRegister = async (e) => {
    try {
      e.preventDefault();
      // validation
      if (
        !(
          input.firstName.trim() &&
          input.lastName.trim() &&
          input.email.trim() &&
          input.password.trim() &&
          input.confirmPassword.trim()
        )
      ) {
        return alert("Please fill all inputs");
      }
      if (input.password !== input.confirmPassword) {
        return alert("Passwords do not match");
      }

      const result = await axios.post(
        "http://localhost:8899/auth/register",
        input
      );
      console.log(result.data);
      setInput(initialState);
      e.target.closest("dialog").close();
      toast.success("Register successfully");
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message;
      console.log(errMsg);
      toast.error(errMsg);
    }
  };

  return (
    <form onSubmit={hdlRegister} className="flex flex-col gap-3 p-4 pt-10">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Firstname"
          className="input input-bordered w-full"
          name="firstName"
          value={input.firstName}
          onChange={hdlChange}
        />
        <input
          type="text"
          placeholder="Surname"
          className="input input-bordered w-full"
          name="lastName"
          value={input.lastName}
          onChange={hdlChange}
        />
      </div>
      <input
        type="text"
        placeholder="Email or phone number"
        className="input input-bordered w-full"
        name="email"
        value={input.email}
        onChange={hdlChange}
      />
      <input
        type="password"
        placeholder="Your password"
        className="input input-bordered w-full"
        name="password"
        value={input.password}
        onChange={hdlChange}
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="input input-bordered w-full"
        name="confirmPassword"
        value={input.confirmPassword}
        onChange={hdlChange}
      />
      <button className="btn btn-secondary text-xl text-white">Sign up</button>
    </form>
  );
};

export default Register;
