import React, {useState} from 'react'
import {
    View,
    Image,
    Text,
    ScrollView,
    Dimensions,
    Touchable,
    TouchableOpacity,
    FlatList
} from 'react-native'

import {styles} from './style'
import {AgentData} from '../../interfaces'

import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import {AgentDetailScreenProps} from '../../interfaces'
import Navigation from '../../navigation';

const AgentDetail: React.FC<AgentDetailScreenProps> = (props) => {

    const[selectedAbilities, setSelectedAbilites] = useState< number | null >()

    const {data, navigation, route} = props;

    return(
        <View>
            <TouchableOpacity style={styles.backIcon} activeOpacity={.8} onPress={() => {navigation.goBack()}}>
                    <Ionicons name="arrow-back"  size={25} color="#000" />
            </TouchableOpacity>
        <ScrollView>
            {
                data ?
                <View>
                  
                    <Animatable.View animation="fadeInLeft" duration={1000} style={styles.topContainer}>
                        <Animatable.Image animation="fadeIn" duration={1000} delay={500} style={styles.posterImage} source={{uri : data.fullPortrait}} />
                        <Animatable.Text animation="fadeIn" duration={1000} delay={600} style={styles.displayName}>{data.displayName}</Animatable.Text>
                        <Animatable.Text animation="fadeIn" duration={1000} delay={600} style={styles.roleDisplay}>{data.role.displayName}</Animatable.Text>
                     </Animatable.View>   
                     <View style={{height:30}}></View>
                     <View style={styles.container}>
                         <Animatable.Text animation="fadeIn" duration={1200} delay={600} style={styles.titleText}>Role</Animatable.Text>
                         <View style={{height:10}}></View>
                         <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Animatable.View animation="fadeIn" duration={1200} delay={600} style={styles.iconWrapper}>
                                <Image style={styles.icon} source={{uri: data.role.displayIcon}} />
                            </Animatable.View>
                            <Animatable.View animation="fadeIn" duration={1200} delay={700} style={{flexShrink:1, marginLeft:10}}>
                                <Text style={styles.roleText}>{data.role.displayName}</Text>
                                <View style={{height:3}}></View>
                                <Text style={styles.roleText}>{data.role.description}</Text>
                            </Animatable.View>
                        </View>
                    </View>
                    <View style={{height:20}}></View>
                     <View style={styles.container}>
                         <Animatable.Text animation="fadeIn" duration={1200} delay={600} style={styles.titleText}>Abilities</Animatable.Text>
                         <View style={{height:10}}></View>
                         <FlatList 
                            data={data.abilities}
                            keyExtractor={(item) => item.slot}
                            horizontal
                            contentContainerStyle={{flex:1}}
                            showsHorizontalScrollIndicator={false}
                            legacyImplementation={false}
                            renderItem={({item,index}) => {
                                return(
                                    <TouchableOpacity activeOpacity={.2} onPress={() => {
                                        setSelectedAbilites(index == selectedAbilities ? null : index);
                                    }} style={{width:(Dimensions.get('screen').width -32) /4 }}>
                                        <Animatable.View animation="fadeIn" duration={1200} delay={(index + 4) * 200} style={index == selectedAbilities ? styles.activeIconWrapper : styles.iconWrapper}>
                                            <Image style={styles.icon} source={{uri: item.displayIcon}} />
                                        </Animatable.View>
                                    </TouchableOpacity>
                                )
                            }}
                         />
                    </View>
                    <View style={{height:20}}></View>
                    {
                            console.log(selectedAbilities)
                        }
                    {
                        selectedAbilities != null &&
                        <Animatable.View style={styles.container}>
                            <Text style={styles.titleText}>{data.abilities[selectedAbilities]?.displayName}</Text>
                            <View style={{height:5}}></View>
                            <Text style={styles.roleText}>{data.abilities[selectedAbilities]?.description}</Text>
                        </Animatable.View>
                    }
                    <View style={{height:20}}></View>
                </View>
                :
                <View>
                    <Text>Failed Load Data</Text>
                </View>
            }
        </ScrollView>
        </View>
    )
} 

export default AgentDetail;
