import React from 'react'
import withCounter from './WithCounter'
const HoverCounter = ({count, incrementCount}) => {
return (
    <button onMouseOver ={incrementCount}>
      Hovered with HOC {count} times
    </button>
  )
}
export default withCounter(HoverCounter)