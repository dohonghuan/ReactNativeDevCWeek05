import React from 'react'
import {Text, StyleSheet, View, Image, TouchableOpacity, Linking} from 'react-native'


export default class Articles extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
    }

    onPressReadMore = () => {
        Linking.openURL(this.props.articles.item.url).catch((err) => console.error('An error occurred', err));
    }
    render(){
        return(
            <View >
                <View style = {styles.img}>
                    <Image style = {styles.image} source = {{uri: this.props.articles.item.urlToImage}}/>
                </View>
                
                <Text style = {styles.title}>{this.props.articles.item.title}</Text>
                <TouchableOpacity sytle = {styles.buttonStyle} onPress = {this.onPressReadMore}>
                    <Text style = {styles.para}>
                        READ MORE
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}   

const styles = StyleSheet.create({
    img: {
        
        margin: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },
    image:{
        height: 400,
        width: 400,
       
    },
    button: {
        height: 60,
        width: 400,
        backgroundColor: 'blue',
    },
    buttonStyle: {
        height: 400,
        width: 400,
        padding:10,
        backgroundColor: 'blue',
        borderRadius:5,
    },
    para: {
        fontSize: 30,
        color: 'white',
       
        width: 400,
        backgroundColor: 'blue',
        padding: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius:10,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        fontWeight: 'bold',
    }
});