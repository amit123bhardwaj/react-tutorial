import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from '../src/store/reducer/counter';
import resReducer from '../src/store/reducer/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import reducer from './store/reducer';
const rootReducer = combineReducers({
       ctr:counterReducer,
       res:resReducer
});

const logger=store=>{
  return next=>{
    return action=>{
        console.log("[middleWare]",action)
        const res=next(action)
        return res
    }
  }
}

const store = createStore(rootReducer,applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
