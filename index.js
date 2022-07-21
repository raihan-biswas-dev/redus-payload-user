// State
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require('redux')

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const RESET = 'RESET';
const ADD_USER = 'ADD_USER'

const initialState = {
    users: ["Raihan"],
    count: 1
}



const addUserAction = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}




const userReducr = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            return state;
    }
}







const store = createStore(userReducr)

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(addUserAction('Biswas'))
store.dispatch(addUserAction('Anik'))
