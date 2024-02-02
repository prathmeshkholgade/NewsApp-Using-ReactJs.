import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arry: [],
};

// imgUrl:"https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// title:"ECMA Script SE7 features ",
// description:"ECMAScript is a standard for scripting languages, including JavaScript, JScript, and ActionScript. It is best known as a JavaScript standard intended to ensure the interoperability of web pages across different web browsers. It is standardized by Ecma International in the document ECMA-262."
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      // const NewData ={
      //     imgUrl:action.payload,
      //     title:action.payload,
      //     description:action.payload
      // }
    state.arry.push(action.payload);
    },
    clearData: (state) => {
      state.arry = [];
    },
  },
});

export const { addData ,clearData} = dataSlice.actions;
export default dataSlice.reducer;
