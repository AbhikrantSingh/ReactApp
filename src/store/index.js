import {createSlice,configureStore} from '@reduxjs/toolkit'

const loginUser = {
    Email:"",
    Password:""
}
const user={
    userEmail:"",
    userPassword:"",
    userName:""
};
const counterSlice = createSlice({
    name:'login',
    initialState:loginUser,
    reducers:{
        setEmail(state,action)
        {
            state.Email=action.payload;
            console.log(action.payload);
        },
        setPassword(state,action)
        {
            state.Password=action.payload;
            console.log(action.payload);

        }
    }
});
const userSlice = createSlice({
    name:'NewUser',
    initialState:user,
    reducers:{
        setUserEmail(state,action)
        {
            state.userEmail= action.payload;
        },
        setUserName(state,action)
        {
            state.userName= action.payload;
        },
        setUserPassword(state,action)
        {
            state.userPassword= action.payload;
        }

    }
})
const store = configureStore({
    reducer:{
        loginUser : counterSlice.reducer,
        NewUser :userSlice.reducer
    }
})

export const counterAction = counterSlice.actions;
export const userAction = userSlice.actions;
export default store;