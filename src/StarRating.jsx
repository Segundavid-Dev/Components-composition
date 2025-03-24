import React from "react";
import PropTypes from "prop-types";

function CustomButton({ label, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}

function App() {
  function sayHello() {
    console.log("Hello, user");
  }

  function logMessage() {
    console.log("Button was clicked");
  }

  return (
    <div>
      <CustomButton label="Say Hello" onClick={sayHello} />
      <CustomButton label="Button was Clicked" onClick={logMessage} />
    </div>
  );
}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default App;
