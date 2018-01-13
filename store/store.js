import { createStore } from 'redux'
import rgbitApp from './reducers'

let store = createStore(rgbitApp)
export default store;