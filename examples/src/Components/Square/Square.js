import React from "react";
import "./Square.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


// class Square extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     value: null
//   //   };
//   // }

//   render() {
//     return (
//       //1. <button className="square" onClick={function () { alert("click"); }}></button>
//       //2. <button className="square" onClick={() => { alert("click"); }}>
//       <button
//         className="square"
//         // onClick={() => { this.setState({ value: "X" }); }}
//         onClick={() => this.props.onClick()}
//       >
//         {
//           this.props.value
//           /* {this.state.value} */
//         }
//       </button>
//     );
//   }
// }

export default Square;
