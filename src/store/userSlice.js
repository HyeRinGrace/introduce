import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: {
        uid : '',
        photoURL : '',
        displayName:'',
        text:'',
    }
}


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action) =>{
            state.currentUser.uid = action.payload.uid;
            state.currentUser.photoURL = action.payload.photoURL;
            state.currentUser.displayName = action.payload.displayName;
            state.currentUser.text = action.payload.text;
        },
    }
})


export const {setUser} = userSlice.actions;
export default userSlice.reducer;