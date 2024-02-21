import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../app/(cart)/CartSlice";

export default configureStore({
    reducer : {
        cart : cartReducer
    }
});