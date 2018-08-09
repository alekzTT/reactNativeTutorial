//Import a libraries to help to create a component
import React from 'react';
import { Text, View } from 'react-native';

//Create a component
//check the syntax for only one line
const Header = (props) => { 
    const { textStyle, viewStyle } = styles;

    return ( 
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    
    viewStyle: {
        backgroundColor: '#F0F0F0',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 60, 
        marginTop: 0, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 1, 
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }

};

//Make the component available to other parts of the app
export default Header;

