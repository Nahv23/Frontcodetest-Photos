import React, {Component} from 'react'

import PhotoItem from './PhotoItem'

class Photos extends Component {

  state={
    data:[],
    searchAlbums:[],
  }

  componentDidMount (){
    this.getItems();
    setTimeout(()=> { this.getAlbumID();}, 500);
    }



  getItems (){
    fetch('https://jsonplaceholder.typicode.com/albums/%7Balbumid%7D/photos')
      .then( response =>        
          response.json())     
      .then( response => {
          this.setState ({data: response})
      })
  }

    getAlbumID(){
        const albumID = this.props.match.params.id;
        let albumsFilt =[]       
        this.state.data.map(albums => {

                if(albums.albumId == albumID){
                    albumsFilt.push(albums)
                }
            this.setState ({searchAlbums: albumsFilt})
        })

    }       
        

  
  render (){

    return (
     
        // <h1>Hola</h1>

       <div className="container mt-5">
        <div className="jumbotron-info">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th className="text-center">User</th>
                    <th className=" text-center">Title</th>
                    <th className=" text-center">Photo</th>

                </tr>
                </thead>
                <tbody>
                    {this.state.searchAlbums.map(album => 
                    <PhotoItem 
                    key={album.id}
                    {...album}
                    >
                    </PhotoItem>)
                }
                </tbody>
            </table>
        </div>
        </div>
            
    )
   }
}

export default Photos;

