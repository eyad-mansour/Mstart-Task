import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deals: [],
    loading: false,
    error: null,
    deal: {},
    climedDeal: []

};

export const dealSlice = createSlice({
    name: "deal",
    initialState,
    reducers: {
        requestGetDeals: (state) => {
            state.loading = true;
        },
        getDealsSuccess: (state, action) => {
            state.loading = false;
            state.deals = action.payload;
        },
        getDealsFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        requestAddDeal: (state) => {
            state.loading = true;
        },
        addDealSuccess: (state, action) => {
            state.loading = false;
            const currentData = state.deals.deals.filter((deal) => {
                return action.payload.id !== deal.id
            });
            state.deals.deals = [action.payload, ...currentData]
        },
        addDealFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        requestDeleteDeal: (state) => {
            state.loading = true;
        },
        deleteDealSuccess: (state, action) => {
            state.loading = false;
            const currentData = state.deals.deals.filter((deal) => deal.id !== action.payload);
            state.deals.deals = [action.payload, ...currentData]
        },
        getClimedDeal: (state, action) => {
            state.loading = false;
            state.climedDeal = action.payload;
        },
        createClimedDealSuccess: (state, action) => {
            state.loading = false;
            state.deals = action.payload;
        },
        deleteDealFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        requestUpdateDeal: (state) => {
            state.loading = true;
        },
        updateDealSuccess: (state, action) => {
            state.loading = false;
            state.deals.deals = state.deals.deals.map((deal) => (deal.id === action.payload.id ? action.payload : deal));
            state.deal = action.payload;
        },
        updateDealFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    requestGetDeals,
    getDealsSuccess,
    getDealsFailed,
    requestAddDeal,
    addDealSuccess,
    addDealFailed,
    requestDeleteDeal,
    deleteDealSuccess,
    deleteDealFailed,
    requestUpdateDeal,
    updateDealSuccess,
    updateDealFailed,
    getClimedDeal,
    createClimedDealSuccess
} = dealSlice.actions;

export const dealsState = (state) => state.deal.deals;
export const loadingState = (state) => state.deal.loading;
export const errorState = (state) => state.deal.error;

export default dealSlice.reducer;
