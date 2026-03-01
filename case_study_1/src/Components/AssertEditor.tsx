
import React from "react";
interface Asset{
    name:string;
    symbol:string;
    value: number;
    change:number;

}
//props interface
interface AssertEditorProps{
    onUpdate:(asset:Asset)=>void;

}
//state interface
interface AssertEditorState{
    name:string;
    symbol:string;
    value:string;
    change:string;
}
//class component
class AssetEditor extends React.Component<AssertEditorProps,AssertEditorState>
{
    //initalizing state 
state:AssertEditorState={
    name:"",
    symbol:"",
    value:"",
    change:""
}
//to handle change
handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({
        [e.target.name]:e.target.value
    }as Pick<AssertEditorState,keyof AssertEditorState>)
}
//Pick-typescript(says that this matches part of AssetEditorState)


//handle submit function
handleSubmit=(e:React.FormEvent)=>{
    //to stop refreshing each time when vlaues are entered
    e.preventDefault();
    this.props.onUpdate({
        name:this.state.name,
        symbol:this.state.symbol,
        value:parseFloat(this.state.value),
        change:parseFloat(this.state.change)
    })
    //to reset form
    this.setState({
        name:"",
        symbol:"",
        value:"",
        change:""
    })
    
}

render(){
   return(
   <form onSubmit={this.handleSubmit}>
  <div>
    <label>Name: </label>
    <input
      name="name"
      value={this.state.name}
      onChange={this.handleChange}
    />
  </div>

  <div>
    <label>Symbol: </label>
    <input
      name="symbol"
      value={this.state.symbol}
      onChange={this.handleChange}
    />
  </div>

  <div>
    <label>Value: </label>
    <input
      name="value"
      value={this.state.value}
      onChange={this.handleChange}
      type="number"
    />
  </div>

  <div>
    <label>Change (%): </label>
    <input
      name="change"
      value={this.state.change}
      onChange={this.handleChange}
      type="number"
    />
  </div>

  <button type="submit">Submit</button>
</form>

   )




}
}
export default AssetEditor;