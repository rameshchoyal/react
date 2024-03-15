import React from "react";
import ReactDOM  from "react-dom/client";

const Title =() => (
    <h1> hello there from title </h1>
)

const number = 1000;
const HeadingComponent = () => (
    <div id="container">
    <Title />
    {number}
     <h1> Hello world from functional ccomponent </h1> 
     </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

