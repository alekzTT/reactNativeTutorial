import React from 'react';
import { View, Text } from 'react-native';

//functional component
//presentation only

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.record.title}</Text>
        </View>
    );
};

export default AlbumDetail;
