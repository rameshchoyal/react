import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            userInfo:{
                name:"dummy",
                login:"dummy",
                avatar_url:"dummy"
            }
        };
        console.log("constructor called")
    }

    async componentDidMount(){

        const data =await fetch("https://api.github.com/users/rameshchoyal");
        const json = await data.json();
        
        console.log(json);
        this.setState({
            userInfo:json,
        });
        console.log("componenDidMount is called")
    }
    componentDidUpdate(){
        console.log("compoundDidupdate called")
    }
    componentWillUnmount(){
        console.log("Component will unmount called")
    }
    

    render(){
        console.log("render is called")
        const {name,login,avatar_url}= this.state.userInfo;
        return(
            <div className="user">
                <img src={avatar_url}/>
                <h1>Name:{name}</h1>
                <h2>Location: Hyderabad</h2>
                <h2>User Name: @{login}</h2>
            </div>
            
        )
    };

}

export default UserClass;