import {FETCH_WEATHER} from '../actions/index'

export default function(state=[], action) {
    console.log(action)
    switch (action.type) {
        case FETCH_WEATHER:
          //  return state.concat([action.payload.data])
          //the same way to add to the state array (create new array)
          return [action.payload.data, ...state]
    }
    return state
}