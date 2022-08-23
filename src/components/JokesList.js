import React from "react";
import { connect } from "react-redux";
const JokesList = (props) => {
  const jokes = props.jokes && props.jokes.value;
  //console.log(props.jokes.value, "list");
  return (
    <>
      {jokes == null
        ? []
        : jokes.map((i) => (
            <div key={i.id} className="container">
              <div className="card">
                <div className="content">{i.joke}</div>
              </div>
            </div>
          ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes,
  };
};
export default connect(mapStateToProps)(JokesList);
