import React from "react";
import ReactDOM from "react-dom";
import { jsx } from "react/jsx-runtime";

// React.createElement → ReactElement-JS Object → HTMLELement (render)

//// basic format of creating a react element

// const heading = React.createElement("h1",
//      {id:'header'},
//       "hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const parent = React.createElement(
//       'div',
//       {id:'header'},
//       [React.createElement(
//             'div',
//             {id:'child'},
//            [ React.createElement(
//                   'h1',
//                   {},
//                   'iam the h1'),
//                   React.createElement(
//                         'h1',
//                         {},
//                         'iam the h1')]
//       ),React.createElement(
//             'div',
//             {id:'child'},
//            [ React.createElement(
//                   'h1',
//                   {},
//                   'iam the h1'),
//                   React.createElement(
//                         'h1',
//                         {},
//                         'iam the h1')]
//       )]
// )
// console.log(parent);
//  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//-------------------------------------------------------------------------
//jsx (transpiled before it reaches the JS) -PASRCEL -Babel
// JSX => Babel transpiles it to React.createElement => REactElement-JS Object => HTMLElement(render)
//---------------------------------------------------------------------------------

// //single line jsx element not needed to write  parenthesis

// jsxheading = <h1 id="header" >hello world from react 🚀</h1>

// //multiline jsx element compolsory to write parenthesis

jsxheading1 = <h1 id="header">hello world from react 🚀</h1>;

//function component with return keyword

const Heading1 = () => {
  return <h1 className="header">hello world from heading1👀</h1>;
};

//function component without return keyword
const Heading2 = () => (
  <div id="container">
    <Heading1 />
    <h1 className="header">hello word from heading2😱</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2 />);
