import React, {Component} from 'react'

export default class BuddyBagForm extends Component {
    constructor(props){
      super(props)
      this.state = {
        name: "name",
        occasion: "occasion"
      }
    }

    handleChange = (event) =>{
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) =>{
      console.log(this.props)
      const newTodo = this.state
      event.preventDefault()
      this.props.postTodo(newTodo)

    }

    render() {
      return(

        <React.Fragment>
          <h2> Enter Item</h2>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <label htmlFor="name">Name</label>
              <input name="name" id="name" onChange={(event) => this.handleChange(event)}value={this.state.name} />
              <label htmlFor="occasion">Occasion</label>
              <input name="occasion" id="occasion" onChange={(event) => this.handleChange(event)}value={this.state.occasion} />
              <input type="submit"/>
            </form>
        </React.Fragment>
      )
    }
  }
