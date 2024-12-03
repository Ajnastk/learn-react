// import { useState } from 'react';
// const Counter = ()=> {
//   const [counter, setCounter] = useState(5);

//   return (
//     <>
//       <span>{counter}</span>
//       <button onClick={() => {
//         setCounter(counter => counter + 5);
//         setCounter(counter => counter + 5);
//         alert(counter);
//         setCounter(counter => counter + 5);
//         setCounter(counter => counter + 5);
//       }}>Increment</button>
//     </>
//   )
// }
// export default Counter;

// export const Generate = () => {
//     const [text, setText] = useState("");  // State to hold input value
//     const [displayText, setDisplayText] = useState(""); // State to hold displayed text
  
//     const handleSubmit = () => {
//       setDisplayText(text);  // Update the paragraph text when button is clicked
//     };
  
//     return (
//       <div>
//         <input 
//           type="text" 
//           value={text}  // Controlled input, its value is linked to 'text' state
//           onChange={(event) => setText(event.target.value)} // Update text on every input change
//         />
//         <button onClick={handleSubmit}>Submit</button>  {/* Button click sets the paragraph text */}
//         <p>{displayText}</p>  {/* Display the text entered after clicking the button */}
//       </div>
//     );
//   };