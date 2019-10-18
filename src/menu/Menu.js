import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({nomBoutonActif, onClicButon}) => (
    <View style={styles.menu}>
        <OptionMenu nom='Toutes' nomBoutonActif={nomBoutonActif} onPress={() => onClicButon('Toutes')} />
        <OptionMenu nom='Actives' nomBoutonActif={nomBoutonActif} onPress={() => onClicButon('Actives')} />
        <OptionMenu nom='Terminées' nomBoutonActif={nomBoutonActif} onPress={() => onClicButon('Terminées')} />
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu