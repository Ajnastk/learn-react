// const heading = React.createElement("h1",
//      {id:'header'},
//       "hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement(
      'div',
      {id:'header'},
      [React.createElement(
            'div',
            {id:'child'},
           [ React.createElement(
                  'h1',
                  {},
                  'iam the h1'),
                  React.createElement(
                        'h1',
                        {},
                        'iam the h1')]
      ),React.createElement(
            'div',
            {id:'child'},
           [ React.createElement(
                  'h1',
                  {},
                  'iam the h1'),
                  React.createElement(
                        'h1',
                        {},
                        'iam the h1')]
      )]
)
console.log(parent);
 const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

