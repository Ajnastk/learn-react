import Userclass from  "./Userclass";
import React  from "react";


class About extends React.Component {
    constructor(props){
        super(props);

console.log("parent constructor");

    }

    componentDidMount(){

console.log("parent componentDidMount");

    }
    render(){
        return (
            <div><h1>about us page</h1>
            
           
            <Userclass/>
            {console.log("parent render")}
           
            </div>
         
        )

        

    }
}

/****
*
*---
MOUNTING ----
*
* Constructor (dummy)
* Render (dummy)
* ‹HTML Dummy >
* Component Did MOunt
‹API Call>
* ‹this.setState> → State variable is updated
*
* ---- UPDATE
*
*
render (APi data)
*
<HTML (new API data>)
* 
   componentDid Update
*

*/

export default About


