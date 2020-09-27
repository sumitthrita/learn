import React, {Component} from "react";
import {Text, View, StyleSheet} from 'react-native';

class Header extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text} >{this.props.headerText} </Text>
            </View>
        )
    }

};

const styles=StyleSheet.create({
    view:{
        justifyContent:"center",
        alignItems:"center",
        height:60,
        paddingTop:15,
        elevation: 2,
        position:"relative",
        marginBottom:10
    },
    text:{
        fontSize:20,
    }
});

export default Header;
