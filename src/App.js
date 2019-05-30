import React, {Component} from 'react';

import Header from './components/misc/Header';
import AlbumList from './components/albums/AlbumList';

import './App.css';


class App extends Component {
    render() {
      return (
        <div className="App">
          <Header></Header>
          <AlbumList></AlbumList>
        </div>
      );
    }

}

export default App;