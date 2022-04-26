import { createSlice } from "@reduxjs/toolkit";

export const CatSlice = createSlice({
	name: "cats",
	initialState: {
		Cats: [],
		isLoading: false
	},
	reducers: {
		getCatsFetch: (state) => {
			state.isLoading = true;
		},
		getCatsSuccess: (state, action) => {
			state.Cats = action.payload;
			state.isLoading = false;
		},
		getCatsFailure: (state) => {
			state.isLoading = false;
		}
	}
})

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = CatSlice.actions;

export default CatSlice.reducer;