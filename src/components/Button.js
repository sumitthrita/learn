import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';


const Button = ({buttonName, onPress}) => {
    const {buttonStyle, textStyle}=styles;
    
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={buttonStyle} 
        >
            <Text style={textStyle} >
                {buttonName}
            </Text>
        </TouchableOpacity>  
    );
};

const styles=StyleSheet.create({
    buttonStyle:{
        flexDirection:'row',
        alignSelf:"stretch",
        alignContent:'center',
        backgroundColor:"#fff",
        borderRadius:25,
        borderWidth:1,
        borderColor:'#F07114',
        marginLeft:5,
        marginRight:5,  
        marginVertical:15
    },
    textStyle:{
        alignSelf:"center",
        color:"#F07114",
        fontSize:18,
        fontWeight:'600',
        paddingVertical:15,
        textAlign:'center',
        flex:1
    }
});

export default Button;