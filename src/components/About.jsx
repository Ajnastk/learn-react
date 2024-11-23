import { Component } from "react";
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
            
           
            <Userclass Name ={"first"}/>
            {console.log("parent render")};
            <Userclass Name ={"second"}/>
            {console.log("parent render")};
            </div>
         
        )

        

    }
}

export default About