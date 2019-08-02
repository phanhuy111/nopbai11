// import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
// import museumReducer from './museumReducer'

const rootReducer = combineReducers({
    // museum: museumReducer,
    firestore: firestoreReducer
});

export default rootReducer;