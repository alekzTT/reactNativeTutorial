//HTTP request ::  http://rallycoding.herokuapp.com/api/music_albums

//boilerplate 
//
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


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
      componentWillMount() {
          axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => console.log(response.data))
          .catch((err) => console.log(err));
      }
    

    render() {
        return (
            <View>
                <Text>Album List!!! In a Class Component</Text>
            </View>
        );
    }
}

export default AlbumList;
