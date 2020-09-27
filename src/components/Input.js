import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({value, placeholder, secureTextEntry, onChangeText,autoCapitalize} )=> {
    return (
        <View style={styles.textContainer} >
                    <TextInput
                       style={styles.textinputStyle}
                       placeholder={placeholder}
                       value={value}
                       autoCapitalize={autoCapitalize}
                       secureTextEntry={secureTextEntry}
                       onChangeText={onChangeText}
                       />
        </View>
    );
};


const styles=StyleSheet.create({
    textContainer: {
        flexDirection:'row',
    },
    textinputStyle:{
        backgroundColor:'#DCDCDC',
        height:60,
        flex:1,
        color:'#000',
        paddingRight:15,
        paddingLeft:25,
        fontSize:18,
        lineHeight:50,
        marginHorizontal:20,
        marginVertical:15,
        borderRadius:25   
    }
});

export default Input;