
// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 50}}>
            <TextInput placeholder='Titre du film'/>
            <Button title='Rechercher' onPress={() => {}}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput1: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default Search
