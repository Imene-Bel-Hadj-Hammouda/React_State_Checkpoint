import React, { Component } from 'react'
import BillGates from './Photo/BillGates.jpg'

 class AppClass extends Component {
    constructor(props) {
    super(props)
    this.state={
        fullName : "Bill Gates",
        bio : "Bill Gates was born on October 28, 1955 in Seattle (United States), where his father is a business lawyer and his mother is a professor at the University of Washington. Still in Seattle, it was at the private school in Lakeside that he discovered computer science on one of these gigantic computers from the late 1960s, a PDP-10. At 13 years old. It is with his childhood friend Paul Allen that they program their first games and seek to optimize software .In 1973, Gates entered Harvard University as a freshman. There he met Steve Ballmer, who would later become the future boss of Microsoft until 2014. Besides this decisive meeting and his aspirations for computer programming, his university studies did not go further than this first year.Still with his friend Paul Allen, Bill Gates set about developing the very first computer language working with the Altair 8800 consumer microcomputer . Called Altair BASIC, it was the first software of the company created for the occasion: Micro -Soft subsequently renamed Microsoft.",
        profession : "Founder of Microsoft",
        photo :<img src={BillGates} alt='BillGates' height= {500} width={500}  ></img>,
        show : false,
        count:0,
        text:""
    }
}
//les fonctions
showProfil= () => {
this.setState({show:!this.state.show})
}
increment =() =>{
    this.setState({count:this.state.count+1})
}
decrement=() =>{
    this.setState({count:this.state.count-1})
}
handleChange=(e)=>{
// console.log(e.target.value)
this.setState({text:e.target.value})
}
    render() {
        return (
            <div className="App-header">

               {this.state.show ? <h1>Welcome to {this.state.fullName} biographie <br/>{this.state.photo}<br/> He is the {this.state.profession}<br/><br/> {this.state.bio}<br/></h1>  : null} 
               
            {/* //    <h2></h2> 
            // <p></p> */}
               <button onClick={this.showProfil}>Show me</button>
               <br/>
               <br/>
               <button onClick={this.increment}>+</button>
                <p>{this.state.count}</p>
                <button onClick={this.decrement}>-</button>
                <br/>
                <br/>
               <input type="text" placeholder="whrite s.thing" onChange={this.handleChange}/>
<h1>{this.state.text}</h1>
            </div>
        )
    }
}
export default AppClass
