import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar
} from 'react-native'
import {AgentData, AgentDetailScreenProps} from '../interfaces'
import AgentDetail from '../components/AgentDetail'
import {blackColor} from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context';

const AgentDetailScreen: React.FC<AgentDetailScreenProps> = (props) => {

    const {navigation, route} = props;
    const dataAgent = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={blackColor} barStyle={'default'} hidden={false}/>
            <AgentDetail {...props} data={dataAgent?.data} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : blackColor,
        flex: 1
    },
})


export default AgentDetailScreen;