import {
	ADD_SMURF,
	FETCH_SMURFS_HAPPY,
	FETCH_SMURFS_SAD,
	FETCH_SMURFS_START,
	SET_ERROR,
} from '../actions';

export const initialState = {
	smurfs: [],
	loading: false,
	error: '',
};

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case FETCH_SMURFS_START:
			return {
				...state.loading,
				loading: !state.loading,
			};
		case FETCH_SMURFS_HAPPY:
			return {
				...state,
				smurfs: [...action.payload],
				loading: !state.loading,
			};
		case FETCH_SMURFS_SAD:
			return {
				...state.error,
				error: action.payload,
			};
		case ADD_SMURF:
			return {
				...state.smurfs,
				smurfs: action.payload,
			};
		case SET_ERROR:
			return {
				...state.error,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:	|
//  - an array of smurfs									|
//  - a boolean indicating if the app is loading			| DONE
//  - a string indicating a possible error message			|

//2. Add in the arguments needed to complete a standard reducer function. -- DONE
//3. Add in a reducer case to accomidate the start of a smurf fetch. -- DONE
//4. Add in a reducer case to accomidate the successful smurf api fetch. -- DONE
//5. Add in a reducer cases to accomidate the failed smurf api fetch. -- DONE
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list. -- DONE
//7. Add in a reducer case that adds in a value to the error message. -- DONE