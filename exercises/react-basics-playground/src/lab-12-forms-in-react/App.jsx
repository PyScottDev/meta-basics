import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    if (!firstName.trim() || !validateEmail(email) || password.value.length < 8 || role !== "individual" && role !== "business") {
    return false;
    }

     return true;
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
    value: "",
    isTouched: false,
  });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input 
              placeholder="Last name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)} 
              />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
              placeholder="Password"
              type="password"
              value={password.value}
              onChange={(event) => 
                setPassword({
                ...password,
                value: event.target.value
              })}
              onBlur={() => 
                setPassword({
                  ...password,
                  isTouched: true,
                })
              } 
              />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordErrorMessage />
              ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
