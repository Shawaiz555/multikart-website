import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      console.log('Data',data)
      return data;
    } 
    catch (error) {
      console.log('Error',error)
      return Promise.reject(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], 
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;