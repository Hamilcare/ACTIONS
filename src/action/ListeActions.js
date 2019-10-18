import React from 'react'
import { View, Text } from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({ actions, onActionTerminated, filterFonction }) => {

    return (
        <View>
            {actions.filter((action)=>( filterFonction(action))).map((item) => {
                const key = item.titre + item.termine;
                return <UneAction key={key} action={item} onActionTerminated={onActionTerminated}></UneAction>
            })}
        </View>
    )
}

export default ListeActions