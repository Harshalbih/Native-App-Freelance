import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Footer from '@/components/Footer';

const services = [
  {
    title: "CEO: 9860090607",
    image: require('@/assets/images/ceo.jpeg'), 
  },
  {
    title: "Code: 9850370567",
    image: require('@/assets/images/onem.jpeg'), 
  },
  {
    title: "Code: 9698997878",
    image: require('@/assets/images/twom.jpeg'), 
  },
  {
    title: "Code: 7021250467",
    image: require('@/assets/images/threem.jpeg'), 
  },
  {
    title: "Code: 8446770424",
    image: require('@/assets/images/fourm.jpeg'), 
  },
  {
    title: "Code: 7028807263",
    image: require('@/assets/images/fivem.jpeg'), 
  },
  {
    title: "Code: 8459012615",
    image: require('@/assets/images/sixm.jpeg'), 
  },
  {
    title: "Code: 9881291992",
    image: require('@/assets/images/sevenm.jpeg'), 
  },
];

export default function MembersScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView contentContainerStyle={styles.container2}>
      <Text style={styles.heading}>Our Members</Text>
      {services.map((service, index) => (
        <View key={index} style={styles.card}>
          <Image source={service.image} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{service.title}</Text>
        </View>
      ))}
      </ScrollView>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  container2: {
    padding: 16,
    backgroundColor: '#f5f5f5',
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2b5f89',
    textAlign: 'center',
  },
});
