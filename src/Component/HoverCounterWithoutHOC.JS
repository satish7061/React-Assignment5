import React, {useState} from 'react'
const HoverCounterWithoutHOC = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount(prevCount => prevCount + 1)
return (
<button onMouseOver ={incrementCount}>
    Hovered  counter without HOC {count} times
  </button>
  )
}
export default HoverCounterWithoutHOC