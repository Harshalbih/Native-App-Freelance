import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
  Text,
  Animated,
  TouchableOpacity,
  Linking,
} from 'react-native';
import ServicesScreen from './services';
import ContactScreen from './contact';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const slides = [
  { id: '1', image: require('@/assets/images/banner1.webp') },
  { id: '2', image: require('@/assets/images/banking.webp') },
  { id: '3', image: require('@/assets/images/ecurrency.png') },
  { id: '4', image: require('@/assets/images/corruption.jpg') },
  { id: '5', image: require('@/assets/images/castfree.jpg') },
];

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentIndex * width,
        animated: true,
      });
    }
  }, [currentIndex]);

  const handleScroll = (event) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setCurrentIndex(newIndex);
  };
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <Animated.ScrollView>
      <View style={styles.container}>
        {/* Welcome Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome to YogaYogKing</Text>
          <Text style={styles.description}>• Helping Hand •</Text>
          <Text style={styles.description}>• Multiple Services Offering •</Text>
          <Text style={styles.description}>• Contact Anytime for Anything •</Text>
        </View>

        {/* Slideshow */}
        <View style={styles.carouselContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
            scrollEventThrottle={16}
          >
            {slides.map((slide) => (
              <Image
                key={slide.id}
                source={slide.image}
                style={styles.slideImage}
              />
            ))}
          </ScrollView>

          {/* Pagination */}
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  currentIndex === index
                    ? styles.activeDot
                    : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Membership Card */}
        <View style={styles.membershipCard}>
          <Text style={styles.membershipTitle}>Join Our Membership</Text>
          <Text style={styles.membershipDescription}>499 rs only for a year</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contact Us')}
            style={styles.joinButton}
          >
            <Text style={styles.joinButtonText}>Join Here</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.iconCard}
              onPress={() => openLink('tel:9545339997')}
            >
              <Image
                source={require('@/assets/images/telephone.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
        </View>
      </View>

      <ServicesScreen />
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  carouselContainer: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width,
    height: 250,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#2b5f89',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  contentContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    marginBottom: 30,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  membershipCard: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  membershipTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2b5f89',
  },
  membershipDescription: {
    fontSize: 16,
    marginBottom: 12,
    color: '#555',
  },
  joinButton: {
    backgroundColor: '#2b5f89',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
