import React from 'react'
import { View, Text } from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({ actions, onActionTerminated, onActionSuppressed, filterFonction }) => {

    return (
        <View>
            {actions.filter((action)=>( filterFonction(action))).map((item) => {
                const key = item.titre + item.termine;
                return <UneAction key={key} action={item} onActionSuppressed={onActionSuppressed} onActionTerminated={onActionTerminated}></UneAction>
            })}
        </View>
    )
}

export default ListeActions