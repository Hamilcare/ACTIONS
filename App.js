import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'


/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: [{ titre: 'Coucou', termine: false }, { titre: 'Salut', termine: true }],
        nomBoutonActif: 'Toutes'
    }

    onActionTerminated(action) {
        const actionIndex = this.state.actions.findIndex((a) => a.titre === action.titre)
        console.log(this.state.actions[actionIndex])
        this.state.actions[actionIndex] = {
            ...this.state.actions[actionIndex],
            termine: !this.state.actions[actionIndex].termine
        }
        this.setState({ actions: [...this.state.actions] })
    }

    onActionSuppressed(action) {
        console.log("suppression de l'action ",action)
        const actionIndex = this.state.actions.findIndex((a) => a.titre === action.titre)
        console.log(actionIndex)
        this.state.actions.splice(actionIndex, 1)
        this.setState({actions : this.state.actions})
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        console.log('la saisie à changée', nouvelleSaisie)
        this.setState({ texteSaisie: nouvelleSaisie })
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        const { texteSaisie, actions } = this.state
        console.log('Vous avez cliqué sur Valider !')
        actions.push({ titre: texteSaisie, termine: false })
        this.setState({ actions, texteSaisie: '' })
    }

    /**
     * Méthode invoquée lors du clic sur un bouton du menu
     */
    clicBoutonMenu(nomBouton) {
        this.setState({ nomBoutonActif: nomBouton })
    }

    filterAction(action) {
        const {nomBoutonActif} = this.state
        if(nomBoutonActif === 'Toutes'){
            return true;
        }
        if(nomBoutonActif === 'Actives') {
            return action.termine === false;
        }
        return action.termine === true;
    }

    render() {
        const { texteSaisie, actions, nomBoutonActif } = this.state
        console.log('Bouton actif : ',nomBoutonActif)
        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete />
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)} />
                    <ListeActions actions={actions} onActionTerminated={(action) => this.onActionTerminated(action)} onActionSuppressed={(action) => this.onActionSuppressed(action)} filterFonction={(action) => this.filterAction(action)} />
                    <BoutonCreer onValider={() => this.validerNouvelleAction()} />
                </ScrollView>
                <Menu nomBoutonActif={nomBoutonActif} onClicButon={(nomBouton) => this.clicBoutonMenu(nomBouton)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})