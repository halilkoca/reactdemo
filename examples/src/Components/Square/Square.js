import React from "react";
import "./Square.css";

class Square extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: null,
    }
  }



  render() {
    return (
      //<button className="square" onClick={function () { alert("click"); }}></button>
      <button className="square" onClick={() => { alert("click"); }}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
