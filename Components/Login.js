import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'
import {connectApp} from '../API/TrailRunnerAPI'


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        message: ''
        }
    render() {
        return (
            <View style={styles.viewLogin} >
                <View style={styles.viewUser}>
                    <Text style={styles.primaryText} >User : </Text>
                    <TextInput placeholder='krgast' onChangeText={(username) => this.setState({username})} style={styles.textinputUser} />
                </View>
                <View style={styles.viewPass}>
                    <Text style={styles.primaryText} >Password : </Text>
                    <TextInput placeholder='******' secureTextEntry={true} onChangeText={(password) => this.setState({password})} style={styles.textinputPassword} />
                </View>
                <Button title='Login' color='#22264b' style= {styles.buttonLogin} onPress={() => {connectApp(this.state.username,this.state.password)}} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    textinputUser: {
        marginTop: 5,
        flex: 1,
        marginLeft: 5
        //flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center'

    },
    textinputPassword: {
        flex: 1,
        marginLeft: 5
    },
    viewUser: {
        backgroundColor: '#22264b',
        //flex: 1,
        //width: 500,
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    viewPass: {
        backgroundColor: '#22264b',
        //flex: 1,
        //width: 500,
        marginLeft: 5,
        marginRight: 5,
        flex:1, 
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    viewLogin: {
        //flex: 1,
        //width: 500,
        backgroundColor: 'white',
        marginLeft: 6,
        marginTop: 50,
        marginRight: 6,
        alignItems: 'center',
        height: 150,
        width: 350,
        borderColor: 'black',
        borderRadius: 5
        
    },
    buttonLogin:{
        flex: 1,
        marginLeft: 5,
        width: 150
    },
    primaryText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#e6cf8b'
    }

})

export default Login
