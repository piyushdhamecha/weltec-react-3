import { useState, useEffect } from "react"
import ReactFlowChild from "./ReactFlowChild"

function ReactFlow() {
  console.log('%cApp: render start', 'color: MediumSpringGreen')

  const [showChild, setShowChild] = useState(() => {
    console.log('%cApp: useState callback', 'color: tomato')
    return false
  })

  // 1. check dep - If not given then call callback or if given then 
  // the value inside is changed then only callback function will called
  useEffect(() => {
    console.log('%cApp: useEffect no deps', 'color: LightCoral')
    return () => {
      console.log('%cApp: useEffect no deps cleanup', 'color: LightCoral')
    }
  })

  useEffect(() => {
    console.log('%cApp: useEffect empty deps', 'color: MediumTurquoise')
    return () => {
      console.log(
        '%cApp: useEffect empty deps cleanup',
        'color: MediumTurquoise',
      )
    }
  }, [])

  useEffect(() => {
    console.log('%cApp: useEffect with dep', 'color: HotPink')
    return () => {
      console.log('%cApp: useEffect with dep cleanup', 'color: HotPink')
    }
  }, [showChild])

  console.log('%cApp: render end', 'color: MediumSpringGreen')

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={e => setShowChild(e.target.checked)}
        />{' '}
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 30,
          width: 30,
          border: 'solid',
        }}
      >
        {showChild ? <ReactFlowChild /> : null}
      </div>
    </>
  )
}

export default ReactFlow