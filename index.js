//AppRegistry.registerComponent( 'albums', () => App );

//Import a library to help to create a component
import React from 'react';
import { AppRegistry } from 'react-native';

//if its not written by npm we have to declare the whole path
//cause many files can be called the same unlike npm
import Header from './src/components/header';

//Create a component
const App = () => (
   <Header headerText={'Albums'} />
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);

