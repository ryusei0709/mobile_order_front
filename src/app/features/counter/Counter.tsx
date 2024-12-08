
'use client'

import React from 'react'
import { useDispatch } from 'react-redux'

import { decrement, increment,  reset } from '@/app/redux/counter/counterSlice'
import { useSelector } from '@/app/redux/store'

const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          インクリメント
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          デクリメント
        </button>
        <button
          onClick={() => dispatch(reset())}
        >
          リセット
        </button>
      </div>
    </div>
  )
}

export default Counter
