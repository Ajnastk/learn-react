import React from "react";

class Userclass extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);

    //**create state  variables in class based component and
    //  create multiple sate variable in this.state object */

    this.state= {
      userInfo: {
        avatar_url: "dummy-avatar",
        name: "dummy",
        followers: 100000,
        created_at: "new date",
      },
    };

    console.log("child constructor");
  }

  async componentDidMount() {
    
    const data = await fetch("https://api.github.com/users/Ajnastk");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("child componentDidMount");
    
  }
  componentDidUpdate(){
    console.log("child componentDidUpdate");
    
  }
  componentWillUnmount(){
    console.log("child componentWillUnmount");
  }

  render() {
 
const {name,avatar_url,followers,created_at} = this.state.userInfo;
//debugger 
    return (
      <div className="user-card">
        <ul>
         <li><img src={avatar_url} alt="dp" /></li>
          <li>{name}</li>
          <li>Followers : {followers}</li>
          <li>Created : {created_at}</li>
        </ul>
        {console.log("child render") }
       
      </div>
    
      
    );
  }
}

/*
- Parent Constructor
- Parent render

   - First Constructor
   - First Render

   - Second Constructor
   - Second Render
 
<DOM UPDATED - IN SINGLE BATCH>


  - First ComponentDidMount
  - Second ComponentDidMOunt

  - Parent ComponentDidMount
 */





  //life cycle of class components


//   *
// -—-
// MOUNTING
// ----
// *
// * Constructor (dummy)
// * Render (dummy)
// <HTML Dummy >
// * ComponentDidMount()
// *
// *
// ‹API Call>
// ‹this.setState> → State variable is update


//--------
// UPDATE
//--------
// render (APi data)
// <HTML (new API data>)
// componentDidUpdate()


//-----
//Unmounting
//-----

//when we change the component it will be unmounted
// componentWillUnmount()



export default Userclass;
