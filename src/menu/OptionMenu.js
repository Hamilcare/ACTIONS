import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

/**
 * Composant représentant une option de menu.
 *
 *
 *
 */
const OptionMenu = ({ nom, nomBoutonActif, onPress }) => (
    <TouchableHighlight
        underlayColor='#efefef'
        style={[
            styles.item,
            styles.border,
            nomBoutonActif === nom ? styles.selected : styles.notSelected]}
            onPress={onPress}>
        <Text style={[styles.itemText, styles.bold]}>
            {nom}
        </Text>

    </TouchableHighlight>
)


const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    itemText: {
        color: '#777777',
        fontSize: 16
    },
    selected: {
        backgroundColor: '#aaaaaa'
    },
    notSelected: {
        backgroundColor: '#ffffff'
    },
    bold: {
        fontWeight: 'bold'
    }
})
export default OptionMenu