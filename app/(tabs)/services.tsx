import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Footer from '@/components/Footer';

const services = [
  {
    title: "2 Cr. Backup Cover",
    description: "Secure your assets with our extensive 2 Cr. backup cover.",
    image: require('@/assets/images/backup-cover.webp'), 
  },
  {
    title: "Engine Insurance",
    description: "Comprehensive engine protection for your vehicle.",
    image: require('@/assets/images/engine.jpg'), 
  },
  {
    title: "Digital Currency",
    description: "Empowering you with secure digital currency solutions.",
    image: require('@/assets/images/ecurrency.png'), 
  },
  {
    title: "Vehicle Number Plate",
    description: "Get custom-designed vehicle number plates quickly.",
    image: require('@/assets/images/numtwo.webp'), 
  },
  {
    title: "Jobs and Vacancy",
    description: "Explore job opportunities that match your skills.",
    image: require('@/assets/images/jobvacancy.jpg'), 
  },
  {
    title: "Product Selling and Buying",
    description: "A seamless platform for buying and selling products.",
    image: require('@/assets/images/product.png'), 
  },
  {
    title: "Social Help",
    description: "Dedicated to offering assistance to those in need.",
    image: require('@/assets/images/socialhelp.jpg'), 
  },
];

export default function ServicesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView contentContainerStyle={styles.container2}>
      <Text style={styles.heading}>Our Services/Products</Text>
      {services.map((service, index) => (
        <View key={index} style={styles.card}>
          <Image source={service.image} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{service.title}</Text>
          <Text style={styles.cardDescription}>{service.description}</Text>
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
    resizeMode: 'cover',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2b5f89',
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
