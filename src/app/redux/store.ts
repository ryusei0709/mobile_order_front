import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '@/app/redux/counter/counterSlice'
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
});

// console.log('fire')
// console.log(store.getState)
// console.log(typeof store.getState)

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export default store
