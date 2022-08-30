// import {createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productsaga from "./productSaga";
import createSagaMiddleware from "redux-saga";
// const store = createStore(rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productsaga);
export default store;
