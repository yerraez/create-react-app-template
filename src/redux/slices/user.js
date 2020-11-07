import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    totalData: null,
  };

  const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }

})

export const reducer = slice.reducer;



export default slice;
