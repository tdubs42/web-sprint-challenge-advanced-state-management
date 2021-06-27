import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from './actions';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = props => {
    useEffect(() => { props.fetchSmurfs();}, []) // empty deps for componentDidMount
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
}

export default connect(null,{ fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component. -- DONE
//2. Call the fetchSmurfs action when the component first loads. -- DONE