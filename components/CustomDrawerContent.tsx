import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Divider } from 'react-native-paper';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Drawer Header */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/logo.webp')}
          style={styles.logo}
        />
        <Text style={styles.title}>Yoga Yog King</Text>
        <Text style={styles.subtitle}>Bringing Wellness to You</Text>
      </View>

      <Divider style={styles.divider} />

      {/* Drawer Items */}
      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>

      {/* Footer Links */}
      
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b5f89', // Drawer background
  },
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d3c55', // Header background
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 4,
  },
  divider: {
    marginVertical: 10,
    backgroundColor: '#ffffff40',
  },
  drawerItems: {
    flex: 1,
    paddingHorizontal: 10,
  },
  footer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  footerButton: {
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff20',
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
