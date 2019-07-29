import React from 'react'
import BuddyBagItem from './BuddyBagItem'

export default function TodoContainer(props) {
  console.log(props.todos)
  const listItems = props.todos.map((item) => {
    return <BuddyBagItem key ={item.id} todo={item} />
  })
  return(
      <React.Fragment>
        {listItems}
      </React.Fragment>

  )

}
