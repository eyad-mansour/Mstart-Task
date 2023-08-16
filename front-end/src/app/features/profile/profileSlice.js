import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        userProfile: {},
        climedDeals: [],
        profileDeals: [],
        loading: false,
        error: null,
        previewImage: false,
    },
    reducers: {

        getProfileDealsRequest: (state) => {
            state.loading = true;
        },
        getProfileDealsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getProfileDealsSuccess: (state, action) => {
            state.loading = false;
            state.profileDeals = action.payload;
        },
        getUserProfileSuccess: (state, action) => {
            state.loading = false;
            state.userProfile = action.payload;
        },
        getClimedDealsSuccess: (state, action) => {
            state.loading = false;
            state.climedDeals = action.payload;
        },
        getClimedDealsRequest: (state) => {
            state.loading = true;
        },

        getClimedDealsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteClaimedSuccess: (state, action) => {
            state.loading = false;
            const currentData = state.climedDeals.filter((deal) => deal.id !== action.payload);
            state.climedDeals = [action.payload, ...currentData]
        },
        requestDeleteClaimed: (state) => {
            state.loading = true;
        },
        deleteClaimedFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    },
});

export const {
    deleteClaimedFailed,
    requestDeleteClaimed,
    deleteClaimedSuccess,
    getProfileDealsRequest,
    getProfileDealsFail,
    getProfileDealsSuccess,
    getUserProfileSuccess,
    getClimedDealsSuccess,
    getClimedDealsRequest,
    getClimedDealsFail,
} = profileSlice.actions;

export const selectUserProfile = (state) => state.profile.userProfile;
export const selectProfileDeals = (state) => state.profile.profileDeals;
export const selectCLimedDeals = (state) => state.profile.climedDeals;
export const selectProfileLoading = (state) => state.profile.loading;
export const selectProfileError = (state) => state.profile.error;

export default profileSlice.reducer;