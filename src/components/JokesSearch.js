import React from "react";
import { connect } from "react-redux";
import { getData } from "../redux/actions/jokes-action";
import "../App.css";

const JokesSearch = props => {
  const [inputValue, setInputValue] = React.useState("");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>Number of jokes:</label>
      <input
        className="input"
        type="number"
        onChange={onChangeHandler}
        value={inputValue}
      />
      <button
        className="button-4"
        onClick={() => props.getData(inputValue)}
        role="button"
      >
        Press to Get Jokes
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getData: (inputValue) => dispatch(getData(inputValue))
});

export default connect(null, mapDispatchToProps)(JokesSearch);
