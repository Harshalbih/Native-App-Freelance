import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();

  const handlePhonePress = () => {
    Linking.openURL('tel:9545339997');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:yogayogking@gmail.com');
  };

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.heading}>One Call Life Change</Text>
      <Text style={styles.subHeading}>Digital e-currency transaction use</Text>
      <Text style={styles.subHeading}>Corruption free</Text>

      <View style={styles.quickLinks}>
        <Text style={styles.sectionTitle}>Quick Links</Text>

        {/* Navigation Links */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>• Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
          <Text style={styles.link}>• About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Services/Products')}>
          <Text style={styles.link}>• Services/Products</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
          <Text style={styles.link}>• Video Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
          <Text style={styles.link}>• Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contact}>
      <Image
            source={require('@/assets/images/logo.webp')} 
            style={styles.cardImage}
          />
        <Text style={styles.sectionTitle}>Yogayogking.com</Text>
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={styles.contactText}>📞 9545339997</Text>
        </TouchableOpacity>
        <Text style={styles.contactText}>🕒 Online service 24/7</Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.contactText}>📧 yogayogking@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://yogayogking.com')}>
          <Text style={styles.website}>🌐 Yogayogking.com</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.copyright}>
        Yogayogking.com © Copyright 2023-24. All Rights Reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#2b5f89',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  quickLinks: {
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
  },
  link: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 5,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  contact: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  contactText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  website: {
    fontSize: 14,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  copyright: {
    marginTop: 20,
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
