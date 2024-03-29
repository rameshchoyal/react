import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor")
    }
    componentDidMount(){
        // console.log("Parent component did mount")
        // This is used for API calls
    }
    render(){
        // console.log("Parent render");
        return (
            <div>
                <h1>About us</h1>
                {/* <User name={"Salman Khan (function)"}/> */}
                <UserClass name={"Ravi Kumar (class)"}/>
    
            </div>
        );

    }
}


export default About;