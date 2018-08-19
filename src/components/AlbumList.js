//HTTP request ::  http://rallycoding.herokuapp.com/api/music_albums

//boilerplate 
//
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';


//Functional Component

// const AlbumList = () => {
//     return (
//         <View>
//             <Text>Album List!!!</Text>
//         </View>
//     );   
// };

//Class Component
// class AlbumList extends React.Component  if not for destructuring
class AlbumList extends Component {
    state = { albums: [] };
    //PROMISE SYNTAX
      componentWillMount() {
          axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          .then(result => this.setState({ albums: result.data }))
          .catch((err) => console.log(err));
      }

    //ASYNC AWAIT SYNTAX   ..... (error map of undefined.....)
    // async componentWillMount() {
    //     try {
    //    // const result = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    //     this.setState({ albums: await axios.get('https://rallycoding.herokuapp.com/api/music_albums').data });
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }
    
    renderAlbums() {
            return this.state.albums.map(album =>
                <AlbumDetail key={album.title} record={album} />
            );
    }

    render() {
        //console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
