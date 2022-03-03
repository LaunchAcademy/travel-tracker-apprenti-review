import React from "react"

const Place = (props) => {
  let classes = ""
  if (props.selectedStatus) {
    classes = "done"
  }

  return (
    <li className={classes} onClick={props.handleClick}>
      {props.name}
    </li>
  )
}

export default Place
