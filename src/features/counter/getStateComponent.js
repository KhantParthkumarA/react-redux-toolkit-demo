import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import {
  decrement as decrement2,
  increment as increment2,
} from "./counterSlice2";

export default function GetStateComponent() {
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value;
  });
  const count2 = useSelector((state) => {
    console.log(state);
    return state.counter2.value;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>counter1 - {count}</span><br />
        <span>counter2 - {count2}</span><br />
        <button
          aria-label="Increment counter 1"
          onClick={() => dispatch(increment())}
        >
          Increment counter1
        </button>
        <button
          aria-label="Decrement counter 1"
          onClick={() => dispatch(decrement())}
        >
          Decrement counter1
        </button>
        <span>
          <button
            aria-label="Increment counter 2"
            onClick={() => dispatch(increment2())}
          >
            Increment counter2
          </button>
          <button
            aria-label="Decrement counter 2"
            onClick={() => dispatch(decrement2())}
          >
            Decrement counter2
          </button>
        </span>
      </div>
    </div>
  );
}
