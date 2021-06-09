import {StackNavigationProp} from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native';

export type RootNavigatorParamList = {
    AgentList : undefined
    AgentDetail : {data : AgentData} | undefined
}

export interface AgentListScreenProps{
    data : AgentData[] | undefined,
    navigation : StackNavigationProp<RootNavigatorParamList, 'AgentList'>
    route : RouteProp<RootNavigatorParamList, 'AgentList'>
}

export interface AgentDetailScreenProps {
    data : AgentData | undefined ,
    navigation : StackNavigationProp<RootNavigatorParamList, 'AgentDetail'>
    route : RouteProp<RootNavigatorParamList, 'AgentDetail'>
}

export interface AgentData {
    uuid: string,
    displayName: string,
    description: string,
    developerName: string,
    characterTags: string | null,
    displayIcon: string,
    displayIconSmall: string,
    bustPortrait: string,
    fullPortrait: string,
    killfeedPortrait: string,
    assetPath: string,
    isFullPortraitRightFacing: boolean | null | undefined,
    isPlayableCharacter: boolean | null | undefined,
    isAvailableForTest: boolean | null | undefined,
    role : AgentRole,
    abilities : [AgentAbilities]
}

export interface AgentRole {
    uuid: string,
    displayName: string,
    description: string,
    displayIcon: string,
    assetPath: string
}

export interface AgentAbilities {
    slot: string,
    displayName: string,
    description: string,
    displayIcon: string
}

