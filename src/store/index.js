import {createSlice,configureStore} from '@reduxjs/toolkit'

const loginUser = {
    Email:"",
    Password:""
}
const user={
    userEmail:"",
    userPassword:"",
    userName:"",
    userId:"",
    restauntId:"",
    menuRestauntId:""
};
const order={
    total:0,
    restauntId:"",
    menuId:"",
    orderDetails:{
        menuId:"",
        quantity:0
    }
}
const orderSlice = createSlice({
    name :'orderDetail',
    initialState :order,
    reducers:{
        setTotal(state,action)
        {
            let c = state.total;
            c=c+action.payload;
            state.total =c;
            console.log("Total Order Price : "+action.payload);
        },
        setRestauntId(state,action)
        {
            state.restauntId = action.payload;
        },
        setMenuId(state,action)
        {
            state.menuId=action.payload;
        },
        setOrderDetails(state,action)
        {
            console.log(action.payload.quantity);
            console.log(action.payload.menuId);
        }
    }
})
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

        },
        setUserId(state,action)
        {
            state.userId = action.payload;
            console.log(state.userId);
        },
        setRestauntId(state,action)
        {
            state.restauntId = action.payload;
            console.log(action.payload+"-----------------REDUX");
        },
        setmenuRestauntId(state,action)
        {
            state.menuRestauntId = action.payload;
            console.log(action.payload+"-----------------REDUX2222222");

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
        NewUser :userSlice.reducer,
        orderD: orderSlice.reducer

    }
})

export const counterAction = counterSlice.actions;
export const userAction = userSlice.actions;
export const orderAction = orderSlice.actions;

export default store;