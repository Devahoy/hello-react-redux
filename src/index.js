import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger))

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'))
registerServiceWorker()
