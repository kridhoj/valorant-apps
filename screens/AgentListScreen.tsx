import React , {useState, useEffect} from 'react'
import {
    View,
    // SafeAreaView,
    StatusBar,
    StyleSheet,
    Image,
    Button,
    Dimensions
} from 'react-native'
import AgentList from '../components/AgentList'
import {AgentData, AgentListScreenProps} from '../interfaces'
import { SafeAreaView } from 'react-native-safe-area-context';
import {blackColor} from '../constants/Color'

import Axios from 'axios'


const AgentListScreen: React.FC<AgentListScreenProps> = (props) => {

    const [agentData , setAgentData] = useState<AgentData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const {navigation,route} = props;

    const get_data_agent = () => {
        setLoading(true);
        Axios.get('https://valorant-api.com/v1/agents')
        .then(res => {
            if(res.status){
                let datas = res.data.data.filter((d:AgentData) => {
                        return d.role;
                })

                console.log('asdasdsad => ',datas);
                setAgentData([{ key: 'empty-left' }, ...datas, { key: 'empty-right' }]);
                // setAgentData(res.data.data);
            }
            setLoading(false);
        })
        .catch(error => {
            console.log('error => ',error)
            setLoading(false);
        })
    }

    useEffect(() => {
        get_data_agent();
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={blackColor} barStyle={'default'} hidden={false}/>
            <View style={styles.headerContainer}>
                <Image style={styles.headerIcon} source={require('../assets/splash_logo.png')} />
            </View>
            {/* <View style={{flex:1,alignItems:'center'}}> */}
                <AgentList {...props} data={agentData}></AgentList>
            {/* </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : blackColor,
        flex: 1
    },
    headerContainer : {
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: blackColor,
        zIndex: 2,
        width: Dimensions.get('screen').width,
        height: 80,
        marginBottom:20
    },
    headerIcon : {
        width:50,
        height:50
    }
})

export default AgentListScreen;