import { Component } from "react";
import check from './reddish.jpg';

export class GroceryList extends Component {
    constructor() {
    super();

        this.state = {
            userInput: "", 
            GroceryList: []   
        }
    }

onChangeEvent(event) {                  
    this.setState({userInput: event})   
}

addItem(input) {               
    if (input === '') {
        alert ("Please enter an item name")
    } else {                          
    let listArray = this.state.GroceryList;  
    listArray.push(input)               
    this.setState({GroceryList: listArray, userInput: ''}) 
    console.log(listArray)
    }
}


crossedWord(event) {
    const li = event.target;        
    li.classList.toggle('crossed');     
}

deleteItem() {
    let listArray = this.state.GroceryList;  
    listArray = [];                           
    this.setState({GroceryList: listArray})
}

onFormSubmit(e) {
     e.preventDefault()      
}

    render () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>         
                <div className="container">             
                <input type="text" 
                placeholder="What do you want to buy?"
                onChange={(event) => {this.onChangeEvent(event.target.value)}}   
                value={this.state.userInput}                   
                />     
                </div>

                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>     
                </div>     

                <div>
                    <ul>
                        {this.state.GroceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                        <img src={check} width="30px" alt="checkmark"/>    
                        {item}
                        </li>   
                        ))} 
                    </ul>
                <div className="container">
                    <button onClick={() => this.deleteItem(this.state.userInput)} className="delete">Clear</button>   
                </div>    
                </div>   
                </form>                                 
            </div>
        )
    }
}
