import {StyleSheet} from 'react-native'
import {primaryColor, blackColor, whiteColor} from '../../constants/Color'
import * as Unit from '../../constants/Units'

export const styles = StyleSheet.create({
    container : {
        paddingHorizontal: 16,
    },
    topContainer : {
        backgroundColor: primaryColor,
        height: 450,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent:'center',
        alignItems: 'center'
        // flex: 1
    },
    posterImage: {
        marginTop:-30,
        marginBottom: 10,
        width: '75%',
        height: '75%',
    },
    roleDisplay : {
        fontWeight:'300',
        textTransform:'uppercase',
        fontSize: 22,
        color : blackColor
    },
    displayName : {
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize: 30,
        color : whiteColor
    },
    titleText : {
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize: 18,
        color : whiteColor
    },
    roleText : {
        fontSize: 16,
        color : whiteColor
    },
    iconWrapper : {
        width: 60,height: 60,padding: 15,borderColor: '#fff', borderWidth:1,borderRadius:10
    },
    activeIconWrapper : {
        width: 60,height: 60,padding: 15,borderColor: '#fff', borderWidth:1,borderRadius:10,backgroundColor : primaryColor
    },
    icon : {
        width: 30, height:30
    },
    backIcon : {
        position:'absolute',top: 16,left: 16, zIndex: 4, backgroundColor:'#fff',borderRadius: 25, height:40, width: 40,justifyContent:'center',alignItems: 'center'
    }
    
})