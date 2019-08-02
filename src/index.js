import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux'
import firebase from './components/firebase'
import rootReducer from './components/reducer/index'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            // createLogger({ collapsed: true }),
            thunk.withExtraArgument({
                getFirebase,
                getFirestore
            })
        ),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, {
            useFirestoreForProfile: true,
            userProfile: 'users'
        })
    )
);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();