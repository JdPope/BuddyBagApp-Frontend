import React, {Component} from 'react'
import BuddyBagForm from './components/BuddyBagForm'
import BuddyBagContainer from './components/BuddyBagContainer'
import './App.css';
export default class App extends Component {

constructor(props){
  super(props)
  this.state = {

    bag_items: []
  }
}

componentDidMount(){
  setTimeout(() => {
    this.fetchTodos()
  console.log('hi')}
    , 3000)
}


fetchTodos = () => {
let url = "http://localhost:3000/bag_items/index"
fetch(url)
  .then(response => response.json())
  .then(result => this.setState({bag_items: result}))

}

postTodos = (newTodo) => {
let newTodos = [...this.state.bag_items, newTodo]
let url =  "http://localhost:3000/bag_items/index"

fetch(url,{
// {console.log(url)}
  method: 'POST',
  body: JSON.stringify(newTodo),
  headers:{
    'content-type': 'application/json'
  }
})
.then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error))
.then(result => this.setState({
  bag_items: newTodos
}))

}

  render(){
    return(
      <div>
        <h1>Buddy Bag: the Millenial Diaper Bag Builder</h1>
        <BuddyBagForm postTodo={this.postTodos}/>
        {this.state.bag_items
          ? <BuddyBagContainer todos={this.state.bag_items}/>

          : <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="hello"/>
        }
      </div>

    )
  }

}
