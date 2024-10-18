import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

const apiUrl = 'http://localhost:3005/products'

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
    const response = await axios.get(apiUrl)
    return response.data
})

export const addCategory = createAsyncThunk('products/addCategory', async (newCategory) => {
    await axios.post(apiUrl, newCategory);
    return newCategory;
});

export const editCategory = createAsyncThunk('products/editCategory', async ({ id, category }) => {
    await axios.put(`${apiUrl}/${id}`, category);
    return { id, category }
});

export const deleteCategory = createAsyncThunk('products/deleteCategory', async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    return id;
});

const CategorySlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        status: "nothing",
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = "loading",
                    state.loading = true
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeed"
                state.items = action.payload,
                    state.loading = false
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed",
                    state.loading = false
            })
            .addCase(addCategory.pending, (state, action) => {
                state.status = "loading",
                    state.loading = true
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.status = "succeed"
                state.items.push(action.payload),
                    console.log(action.payload);

                state.loading = false
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.status = "failed",
                    state.loading = false
            })
            .addCase(editCategory.pending, (state, action) => {
                state.status = "loading",
                    state.loading = true
            })

            .addCase(editCategory.fulfilled, (state, action) => {
                state.status = "succeed";
                state.loading = false;
                let index = state.items.findIndex(item => item.id == action.payload.id);
                if (index != -1) {
                    state.items[index] = action.payload.category
                }
            })

            .addCase(editCategory.rejected, (state, action) => {
                state.status = "failed",
                    state.loading = false
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.loading = false;
                console.log("Deleted category with ID:", action.payload);
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.status = "failed";
                state.loading = false;
                console.log("Delete category failed:", action.payload);
            })

    }
})

export default CategorySlice.reducer