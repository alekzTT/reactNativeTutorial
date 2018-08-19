import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//functional component
//presentation only

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.record.title}</Text>
            </CardSection>
            <CardSection>
                <Text>{props.record.artist}</Text>
            </CardSection>
            <CardSection>
                
            </CardSection>
            
        </Card>
    );
};

export default AlbumDetail;
