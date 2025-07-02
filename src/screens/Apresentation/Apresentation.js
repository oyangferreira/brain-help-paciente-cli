import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../../components/Icon/Icon';
import FastImage from 'react-native-fast-image';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Sinta-se bem em qualquer momento do dia',
    text: 'Descubra uma nova abordagem para\ncuidar de sua saúde mental em qualquer momento do dia.',
    image: require('../../assets/img1.jpg'),
  },
  {
    title: 'Suporte disponível para\n tirar suas dúvidas',
    text: 'Utilize o menu ajuda para tirar qualquer possível dúvida que você tenha sobre o aplicativo.',
    image: require('../../assets/img2.jpg'),
  },
  {
    title: 'Chamadas de vídeo com ótima qualidade',
    text: 'Aproveite as chamadas de vídeo nítidas e confidenciais com os profissionais, sem precisar sair de casa.',
    image: require('../../assets/img3.jpg'),
  },
];

const OnboardingItem = ({ item, index, scrollX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.carouselItem, { opacity }]}>
      <FastImage source={item.image} style={styles.carouselImage} resizeMode='contain' />
      <View style={styles.paddingHorizontal}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.carouselText}>{item.text}</Text>
      </View>
    </Animated.View>
  );
};

const DotIndicator = ({ index, scrollX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const dotWidth = scrollX.interpolate({
    inputRange,
    outputRange: [8, 24, 8],
    extrapolate: 'clamp',
  });
  const backgroundColor = scrollX.interpolate({
    inputRange,
    outputRange: ['#B0B0B0', '#2196F3', '#B0B0B0'],
    extrapolate: 'clamp',
  });

  return <Animated.View style={[styles.dot, { width: dotWidth, backgroundColor }]} />;
};

const Apresentation = ({ onFinish }) => {
  const insets = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      onFinish?.();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <OnboardingItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      <View style={[styles.controlsRow, { bottom: insets.bottom + 16 }]}>
        <TouchableOpacity onPress={onFinish}>
          <Text style={styles.skipText}>Pular</Text>
        </TouchableOpacity>

        <View style={styles.dotsContainer}>
          {slides.map((_, i) => (
            <DotIndicator key={i} index={i} scrollX={scrollX} />
          ))}
        </View>

        <TouchableOpacity onPress={handleNext}>
          <Icon src="next" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Apresentation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselItem: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  carouselImage: {
    width: '100%',
    height: height * 0.4,
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    color: '#404040',
    marginBottom: 16,
  },
  carouselText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6E6E6E',
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
  },
  controlsRow: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 14,
    color: '#6E6E6E',
    fontFamily: 'Poppins_600SemiBold',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  icon: {
    width: 48,
    height: 48,
  },
});
