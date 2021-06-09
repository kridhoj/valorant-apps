import {StyleSheet, Dimensions} from 'react-native'
import {primaryColor, blackColor, whiteColor} from '../../constants/Color'
import * as Unit from '../../constants/Units'

export const styles = StyleSheet.create({
    container : {
        width: Unit.ITEM_SIZE
    },
    listContainer : {
        padding: Unit.SPACING * 2,
        alignItems: 'center',
        backgroundColor : '#FF4655',
        borderRadius: 34,
        justifyContent:'center',
    },
    imageIcon : {
        width : 50,
        height: 50,
        borderRadius : 25
    },
    textContainer: {
        flexShrink : 1,
    },
    roleDisplay : {
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize: 18,
        color : blackColor
    },
    displayName : {
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize: 28,
        color : whiteColor
    },
    posterImage: {
        width: '100%',
        height: Unit.ITEM_SIZE * 1,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
      },
})