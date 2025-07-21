import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  technology: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
   setTechnology: (state, action) => {
      state.technology = action.payload
    },
    clearFilters: (state) => {
      state.technology = null;
     
    },
  },
});

export const { setTechnology, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
