import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url =
    "https://online-json-server-api.up.railway.app/project/66ad3118340dd55056fb2b1b/products";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data; // Ma'lumotlarni qaytarish
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = "succeeded";
                state.products = payload; // Ma'lumotlarni to'g'ridan-to'g'ri qo'shish
            })
            .addCase(fetchProducts.rejected, (state, { error }) => {
                state.status = "failed";
                state.error = error.message;
            });
    },
});

export default productsSlice.reducer;
