//Import a library to help to create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';

//if its not written by npm we have to declare the whole path
//cause many files can be called the same unlike npm
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
//For Every Component we create we must return a single top level JSX tag
//So we use the View Tag here to wrap up the other tags
//"Single Top Level Tag"

const App = () => (
    <View> 
        <Header headerText={'Albums'} />
        <AlbumList />
   </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);

