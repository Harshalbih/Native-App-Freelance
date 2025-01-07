import { SafeAreaView, StatusBar, StyleSheet, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import HomeScreen from './(tabs)/index';
import AboutScreen from './(tabs)/about';
import ServicesScreen from './(tabs)/services';
import VideosScreen from './(tabs)/videos';
import ContactScreen from './(tabs)/contact';
import CustomDrawerContent from '@/components/CustomDrawerContent';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent={true} // Make the status bar translucent
        backgroundColor="transparent" // Allow system default background
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#2b5f89', // Match drawer background
            width: 260,
          },
          headerStyle: {
            backgroundColor: '#1d3c55',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Image
              source={require('@/assets/images/logo.webp')}
              style={{
                width: 60,
                height: 60,
                marginRight: 10,
                borderRadius: 30,
              }}
            />
          ),
          drawerActiveBackgroundColor: '#ffffff', // White background for active tab
          drawerActiveTintColor: '#2b5f89', // Highlighted text color
          drawerInactiveTintColor: '#ddd', // Inactive text color
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About Us"
          component={AboutScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="info-circle" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Services/Products"
          component={ServicesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="briefcase" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Videos"
          component={VideosScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="book" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={ContactScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="phone" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
