import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: []
}
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticlesStart: (state) => {
            state.isLoading = true
        },
        getArticleSuccess: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getArticleFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {getArticlesStart, getArticleSuccess} = articleSlice.actions
export default articleSlice.reducer