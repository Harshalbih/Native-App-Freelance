import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview'; 
import Footer from '@/components/Footer';

const { width } = Dimensions.get('window'); 

// YouTube videos list
const videos = [
  { id: '1', title: 'Introduction', url: 'https://www.youtube.com/embed/ARpKzV3X22k' },
  { id: '2', title: 'Our Services', url: 'https://www.youtube.com/embed/6R1M9eQPNEE' },
  { id: '3', title: 'Latest', url: 'https://www.youtube.com/embed/I0d0RirmnAo' },
  { id: '4', title: 'Helping Hand', url: 'https://www.youtube.com/embed/wlCz0JBiHj0' },
];

export default function VideosScreen() {
  return (
    <Animated.ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Our Videos</Text>
        <Text style={styles.text}>
          Stay tuned for more Videos.
        </Text>

        <View style={styles.videoContainer}>
          {videos.map((video) => (
            <View key={video.id} style={styles.videoFrame}>
              <Text style={styles.videoTitle}>{video.title}</Text>
              <WebView
                source={{ uri: video.url }}
                style={styles.webview}
                allowsInlineMediaPlayback
                javaScriptEnabled
                domStorageEnabled
              />
            </View>
          ))}
        </View>

        <Footer />
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    padding: 10, 
    borderWidth: 2, 
    borderColor: '#2b5f89', 
    borderRadius: 10, 
    backgroundColor: '#f0f8ff', 
    color: '#2b5f89', 
    overflow: 'hidden',
  }, 
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  videoContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  videoFrame: {
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, 
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: '#f5f5f5',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#2b5f89',
    color: '#fff',
    width: '100%',
  },
  webview: {
    width: width - 40, 
    height: 200, 
  },
});
