import {Dimensions} from 'react-native'

export const { width, height } = Dimensions.get('window');
export const ITEM_SIZE = width * 0.8;
export const SPACING = 5;
export const HEIGHT_SIZE_ACTIVE = height * 0.7;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;