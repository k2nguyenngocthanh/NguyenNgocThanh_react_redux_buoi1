let initiaValue={
    number:0
}

export const numberReducer=(state=initiaValue,action)=>{
    switch (action.type){
        case "TANG_SO_LUONG":{
            state.number++
            return {...state};
        }
        case "GIAM_SO_LUONG":{
            console.log("action",action);
            state.number=state.number - action.payload;
            return{...state};
        }
        default:{
            return state;
        }
    }
}