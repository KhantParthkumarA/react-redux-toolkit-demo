import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice2'
// import styles from './Counter.module.css'

export default function GetStateComponent() {
  const count = useSelector((state) => {
    console.log(state)
    return state.counter2.value
  
  })
  const dispatch = useDispatch()

  return (
    <div>
      counter 2 <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}