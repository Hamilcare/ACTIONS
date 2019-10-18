import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions} = this.props) => {

    return (
        <View>
            {actions.map((item) => <UneAction titre={item}></UneAction>)}
        </View> 
    )
}

export default ListeActions