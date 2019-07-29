import React from 'react'

export default function BuddyBagItem(props){
  return (
    <React.Fragment>
      <h3>{props.todo.name}</h3>
      <p>{props.todo.occasion}</p>
    </React.Fragment>
  )
}
