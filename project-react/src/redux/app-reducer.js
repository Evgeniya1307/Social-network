import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



let initialState = {
    initialized : false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
            default:
                return state;
    }
}


//actionCreater:
export const initializedSuccess = () => ({ 
    type: INITIALIZED_SUCCESS,
})


 

//thunkCreater:
export const initializeApp = () => (dispatch) => {//[2]
    let promise = dispatch(getAuthUserData());//3
    promise.then(() => {
        dispatch(initializedSuccess());//[4] это экшн-криэйтер и возвращаемый экшн;[2] это наша санка;[3] здесь мы и диспатчим санку с другого редьюсера, и объявляем наш промис;[4] здесь после полного завершения диспатча начинается диспатч нашего экшнкриэйтера.
    });
    
}


export default appReducer;
