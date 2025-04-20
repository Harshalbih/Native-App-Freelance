import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import Footer from '@/components/Footer';

export default function AboutScreen() {
  return (
    <Animated.ScrollView>
      <View style={styles.container}>
        {/* Heading */}
        <Text style={styles.heading}>About Us</Text>

        {/* Card with Image */}
        <View style={styles.card}>
          <Image
            source={require('@/assets/images/ceoo.jpg')} 
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>CEO</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('@/assets/images/sonpic.jpg')} 
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>DIRECTOR TO BE</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('@/assets/images/chairmantobe.webp')} 
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>YOGAYOGSELF</Text>
        </View>

        <Text style={styles.text}>
          # Welcome to Yogayogking, your Founded in 2021 by coding number.9997 and based in the
          vibrant city of Pune, India, Yogayogking is committed to providing top-notch services with
          a focus on innovation, sustainability, and community welfare.
        </Text>
        <Text style={styles.text}>
          At Yogayogking, we understand the importance of reliable transportation in today's
          fast-paced world. That's why we specialize in offering comprehensive bike repair and
          maintenance services, ensuring that your two-wheeled companion stays in optimal condition
          for all your journeys. Whether it's a simple tune-up or a complex repair, our skilled
          technicians are dedicated to delivering quality workmanship and prompt service.
        </Text>
        <Text style={styles.text}>
          Yogayogking is proud to be at the forefront of e-bike servicing. As advocates for
          eco-friendly transportation solutions, we offer specialized maintenance and repair
          services for electric bicycles, helping to promote sustainable mobility options for our
          customers.
        </Text>
        <Text style={styles.text}>
          But our commitment doesn't stop there. At Yogayogking, we believe in giving back to the
          community. Through various social initiatives, we strive to make a positive impact on the
          lives of those around us. Whether it's organizing charity rides, supporting local causes,
          or participating in environmental clean-up efforts, we're passionate about using our
          platform to contribute to the greater good.
        </Text>
        <Text style={styles.text}>
          Furthermore, Yogayogking is excited to explore the realm of digital e-currency. In an
          increasingly digital world, we recognize the importance of staying ahead of the curve.
          Through education, consultation, and implementation, we aim to empower individuals and
          businesses to harness the potential of digital currencies for their financial needs.
        </Text>
        <Text style={styles.text}>
          At Yogayogking, we're not just about fixing bikes or embracing new technologies. We're
          about fostering connections, promoting sustainability, and making a difference in the
          world around us. Join us on this journey as we strive to redefine the way we move,
          connect, and give back.
        </Text>
        <Text style={styles.membershipTitle}>Corruption Free</Text>
        <Text style={styles.membershipTitle}>Casteism Free</Text>
        {/* Footer */}
        <Footer />
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  membershipTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2b5f89',
    borderWidth: 1,
    borderColor: '#2b5f89',
    borderRadius: 10,
    padding: 5,
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
    width: '90%',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2b5f89',
    padding: 10,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // Android shadow
  },
  cardImage: {
    width: 250,
    height: 380, // Circular image
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2b5f89',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
