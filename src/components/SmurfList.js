import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

 const SmurfList = props => {
    if ( props.loading === true ) {
        return <h1>Loading...</h1>;
    }

    return(
    	<div className="listContainer">
			{ props.smurfs.map( smurf => <Smurf smurf={smurf}/> )}
    	</div>
	);
}

const mapState = state => {
	return {
		smurfs: state.smurfs,
		loading: state.loading
	}
}

export default connect(mapState)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component. -- DONE
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list. -- DONE
//3. Replace the static isLoading variable with the state loading variable. -- DONE