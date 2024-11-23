import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    //**create state  variables in class based component and
    //  create multiple sate variable in this.state object */

    this.state = {
      count: 0,
    };

    console.log(this.props.Name +  "child constructor");
    
  }
  componentDidMount(){
    console.log( this.props.Name +  "child componentDidMount");
    
  }
  render() {
    const { Name } = this.props;
    const { count, counttwo } = this.state;

    return (
      <div className="user-card">
        <ul>
          <li>{Name}</li>
          <li>Location: America</li>
          <li>pinCode : 673638</li>
          <li>Age:35</li>
          <li>count : {count}</li>

          <button
            onClick={() => {
              this.setState({
                count: count + 1,
              });
            }}
          >
            counter
          </button>
        </ul>
        {console.log(this.props.Name +"child render")}
        
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
export default Userclass;


