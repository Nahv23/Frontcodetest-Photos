import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/misc/NavBar';
import AlbumList from './components/albums/AlbumList';

import './App.css';


class App extends Component {

    render() {
      return (
        <div className="App">
          <NavBar/>

          <section className="section">
            <div className="container">
              <Switch>
                <Route exact path="/albums" component={AlbumList}/>
                {/* <Route exact path="/about" component={About} /> */}
                {/* <Route exact path="/contacts/:id" component={FoundContact} /> */}
                <Redirect to="/albums"/>
              </Switch>
            </div>
          </section>

        </div>
      );
    }

}

export default App;