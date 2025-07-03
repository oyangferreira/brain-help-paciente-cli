import React, { useRef, useState } from 'react';
import { SafeAreaView, StatusBar, Animated, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OnboardingItem, Controls } from '../../components/componentsIndex';
import { slides } from '../../utils/consts';

const { width } = Dimensions.get('window');

const ApresentationScreen = ({ onFinish }) => {
  const insets = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ref para controlar o índice atual de forma síncrona
  const currentIndexRef = useRef(0);

  const handleNext = () => {
    const nextIndex = currentIndexRef.current + 1;
    if (nextIndex < slides.length) {
      flatListRef.current.scrollToIndex({ index: nextIndex });
      // Atualiza o ref imediatamente
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
    } else {
      onFinish?.();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
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
          currentIndexRef.current = index; // atualiza o ref no scroll manual
        }}
      />

      <Controls
        onSkip={onFinish}       // Pular vai direto para login
        onNext={handleNext}     // Próximo avança ou finaliza
        scrollX={scrollX}
        slides={slides}
        insets={insets}
      />
    </SafeAreaView>
  );
};

export default ApresentationScreen;