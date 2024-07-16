import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Menu from '../../../model/Menu/Menu'
import { start } from 'repl'

type CartState = {
  items: Menu[]
  activeTheCart: boolean
}

const initialState: CartState = {
  items: [],
  activeTheCart: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    activeTheCart: (state) => {
      if (state.activeTheCart) {
        state.activeTheCart = false
      } else {
        state.activeTheCart = true
      }
    },
    clear: (start) => {
      start.items = []
    }
  }
})

export const { add, remove, activeTheCart, clear } = cartSlice.actions

export default cartSlice.reducer
