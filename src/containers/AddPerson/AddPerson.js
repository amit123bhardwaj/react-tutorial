import React,{Component} from 'react';

class AddPerson extends Component{
state={
  name:'',
  age:''
}
onNamehandler=(e)=>{
  this.setState({
    name:e.target.value
  })
}
onAgeHandler=()=>{
  this.setState({
    age:e.target.value
  })
}
render(){
  return(
    <div>
    <input type="text" 
           onChange={this.onNamehandler}
           value={this.state.name}
           placeholder="name">
    </input>
    <input type="text" 
            onChange={this.onAgeHandler}
            value={this.state.age}
            placeholder="age">
    </input> 
    </div>
  )
}
}
export default AddPerson;