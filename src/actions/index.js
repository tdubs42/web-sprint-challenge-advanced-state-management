import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_HAPPY = 'FETCH_SMURFS_HAPPY';
export const FETCH_SMURFS_SAD = 'FETCH_SMURFS_SAD';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios.get('http://localhost:3333/smurfs')
        .then( res => {
            dispatch( { type: FETCH_SMURFS_HAPPY, payload: res.data } );
        })
    .catch( err => {
        dispatch({ type: FETCH_SMURFS_SAD, payload: err });
    })
};

export const addSmurf = smurf => {
	const newSmurf = {
		name: smurf.name,
		position: smurf.position,
		nickname: smurf.nickname,
		description: smurf.description
	}
	
    return {
        type: ADD_SMURF,
        payload: newSmurf
    };
};

export const setError = err => {
    return {
        type: SET_ERROR,
        payload: err
    };
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.