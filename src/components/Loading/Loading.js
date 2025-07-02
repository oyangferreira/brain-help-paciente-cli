import React, { useEffect, useRef } from 'react';
import { View, Animated, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Loading = ({ onTimeout }) => {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        const animation = Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 0.3,
                duration: 700,
                useNativeDriver: true,
            }),
        ]);

        const loop = Animated.loop(animation, { iterations: 2 });
        loop.start();

        const timeoutId = setTimeout(() => {
            onTimeout?.();
        }, 3000);

        return () => {
            loop.stop();
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../assets/logo.png')}
                style={[styles.logo, { opacity }]}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: width * 0.4,
        height: width * 0.4,
    },
});

export default Loading;