import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Animated
} from 'react-native'
import {AgentData, AgentListScreenProps} from '../../interfaces'
import {styles} from './style'
import * as Unit from '../../constants/Units'


const AgentList: React.FC<AgentListScreenProps> = (props) => {

    const scrollX = React.useRef(new Animated.Value(0)).current;

    const {data ,navigation, route} = props;

    const renderItem = (item:AgentData, index:number) => {

        if (!item.uuid) {
            return <View style={{ width: Unit.EMPTY_ITEM_SIZE, backgroundColor:'red' }} />;
        }

        const inputRange = [
            (index - 2) * Unit.ITEM_SIZE,
            (index - 1) * Unit.ITEM_SIZE,
            index * Unit.ITEM_SIZE,
        ];

        const scaleInterpolate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          });

        return(
            // item.role &&
            <TouchableOpacity 
                key={index}
                onPress={() => {
                    navigation.navigate('AgentDetail',{data : item});
                }}
                activeOpacity={.8}
                style={styles.container}
                >
              <Animated.View
                style={{...styles.listContainer,height: Unit.HEIGHT_SIZE_ACTIVE,  transform: [
                    { scale: scaleInterpolate },
                  ],}}
              >
                    <Image
                    source={{ uri: item.fullPortrait }}
                    style={styles.posterImage}
                    />
                <Text style={styles.displayName}>{item.displayName}</Text>
                <Text style={styles.roleDisplay}>{item.role.displayName}</Text>
              </Animated.View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Animated.FlatList
                horizontal
                data={data}
                renderItem={({item,index}) => renderItem(item,index)}
                keyExtractor={item => item.uuid}
                bounces={false}
                decelerationRate={0.2}
                contentContainerStyle={{ alignItems: 'center' }}
                showsHorizontalScrollIndicator={false}
                snapToInterval={Unit.ITEM_SIZE}
                snapToAlignment='start'
                scrollEventThrottle={10}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset : {x : scrollX}}}],
                    {useNativeDriver : true}
                )}
            />
        </View>
    )
}

export default AgentList;