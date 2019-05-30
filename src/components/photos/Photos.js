import React, {Component} from 'react'


class Photos extends Component {

  state={
    data:[],
  }

  componentDidMount (){
    this.getItems();
    console.log(this.state.data)
    const albumID = this.props.match.params.id;
  }

  getItems (){
    fetch('https://jsonplaceholder.typicode.com/albums/%7Balbumid%7D/photos')
      .then( response =>        
          response.json())     
      .then( response => {
          this.setState ({data: response})
          console.log ("data? ->", this.state.data)
      })
  }



  render (){
    return (
        <h1>Hola</h1>
    )
    }
}

export default Photos;

// CarService.listOneCar(carID).then(car => {
//     this.setState({ car });
//   });

// import contacts from '../data/contacts.json';
// import ContactItem from './ContactItem.js';
// import queryString from 'query-string';

// const Contacts = (props) => {  
//   const query = queryString.parse(props.location.search);

//   const searchContacts = contacts.filter(contact => (
//     contact.name.includes(query.name || '')
//   ));

//   return (
//     <article className="Contacts">
//       {searchContacts.map((contact, i) => (
//         <ContactItem {...contact} key={i} />
//       ))}
//     </article>
//   );
// }
