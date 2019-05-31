import React, { Component } from 'react';

import AlbumItem from '../albums/AlbumItem'

class AlbumList extends Component {

  state={
    data:[],
  }

  componentDidMount (){
    this.getItems();
  }

  getItems (){
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then( response => response.json())
      .then( response => {
          this.setState ({data: response})
      })
  }
  
  render (){
    return (
      <div className="container mt-5">
      <div className="jumbotron-info">
        <table className="table table-striped">
            <thead>
              <tr>
                <th className="text-center">Name</th>
                <th className=" text-center">Album</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(album => 
                <AlbumItem 
                  key={album.id}
                  {...album}
                >
                </AlbumItem>)
              }
            </tbody>
        </table>
      </div>
    </div>
     )
  }
};

export default AlbumList;