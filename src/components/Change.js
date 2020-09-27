import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Change = ({text, buttonText, onPress}) => {
    return (
        <View style={styles.view} >
            <Text style={styles.text} >{text}</Text>
            <TouchableOpacity style={styles.button} > 
                <Text style={styles.buttonText} onPress={onPress} >{buttonText} </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles=StyleSheet.create({
    view:{
        flexDirection:'row',
        justifyContent:'center',
    },
    text: {
        fontSize:14,
        fontWeight:'bold',
        paddingVertical:5,
        paddingLeft:5,
        color:'#000',
    },
    button:{
        paddingVertical:5,
        paddingLeft:5,
        },
    buttonText:{
        color:'#F07114',
        fontWeight:'bold'
    }    
});

export default Change;
