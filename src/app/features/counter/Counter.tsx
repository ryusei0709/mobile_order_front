
'use client'

import React, { useEffect } from 'react'

import { decrement, increment, incrementByAmount , reset } from '@/app/redux/counter/counterSlice'
import { useSelector } from '@/app/redux/store'
import { useDispatch } from 'react-redux'

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
