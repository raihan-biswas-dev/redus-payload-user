// State
// action - increment, decrement, reset
// reducer
// store

// const { createStore } = require("redux")

// const { createStore } = require('redux')

// const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
// const ADD_USER = 'ADD_USER'

// const initialState = {
//     users: ["Raihan"],
//     count: 1
// }



// const addUserAction = (user) => {
//     return {
//         type: 'ADD_USER',
//         payload: user
//     }
// }




// const userReducr = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_USER:
//             return {
//                 users: [...state.users, action.payload],
//                 count: state.count + 1
//             }
//         default:
//             return state;
//     }
// }







// const store = createStore(userReducr)

// store.subscribe(() => {
//     console.log(store.getState())
// })


// store.dispatch(addUserAction('Biswas'))
// store.dispatch(addUserAction('Anik'))


// state
// action
// reducer
// store

// const { createStore } = require('redux')

// const ADD_USER = 'ADD_USER'

// // state
// const initialState = {
//     users: ['Raihan', 'Habib'],
//     count: 1,
// }

// action

// const addUserAction = (user) => {
//     return {
//         type: 'ADD_USER',
//         payload: user
//     }
// }


// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_USER:
//             {
//                 users: [...state.users, action.payload]
//                 count: state.count + 1
//             }

//         default:
//             return state;
//     }
// }

// const store = createStore(userReducer)

// store.subscribe(() => console.log(store.getState()))

// store.dispatch(addUserAction('Anik Biswas'))



//=========== Multiple Reducers=============

const { createStore, combineReducers } = require("redux")




// product reducer
const GET_PRODUCT = 'GET_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'

const GET_CART = 'GET_CART'
const ADD_CART = 'ADD_CART'

//Product State
const initialProductState = {
    products: ['shirt', 'pant'],
    numberOfProducts: 2
}
//cart state
const initialCartState = {
    cart: ['shirt'],
    numberOfProducts: 1
}


//Product action
const getProducts = () => {
    return {
        type: GET_PRODUCT
    }
}
const addProducts = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

//cart action==================================
const getCart = () => {
    return {
        type: GET_CART
    }
}
const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}

// product reducer

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            return state;
    }
}
// cart reducer

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
            }
        case ADD_CART:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            return state;
    }
}

// store
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})



store.dispatch(getProducts())
store.dispatch(addProducts('apple'))
store.dispatch(getCart())
store.dispatch(addCart('jama'))
store.dispatch(addCart('orange'))



