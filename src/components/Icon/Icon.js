import React from 'react';
import FastImage from 'react-native-fast-image';

import icons from '../../assets/icons/iconIndex';

const Icon = ({ src, color, style }) => (
    <FastImage style={style} tintColor={color} resizeMode={FastImage.resizeMode.contain} source={icons[src].uri} />
);

export default Icon;