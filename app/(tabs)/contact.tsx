import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '@/components/Footer';

export default function ContactScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
    supportGoodPeople: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Contact Form Submission Yogayogking');
    const body = encodeURIComponent(
      `Name: ${form.fullName}
      Email: ${form.email}
      Mobile: ${form.mobile}
      Message: ${form.message}
      Support Good People: ${form.supportGoodPeople}`
    );

    const mailtoUrl = `mailto:yogayogking@gmail.com?subject=${subject}&body=${body}`;

    Linking.openURL(mailtoUrl).catch((err) =>
      console.error('Error opening email:', err)
    );
  };

  const openLocation = () => {
    Linking.openURL('https://maps.app.goo.gl/wMza9gB64PtkYbcc9');
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <Animated.ScrollView>
      <View style={styles.container}>
        <View style={styles.contactsection}>
          <Text style={styles.heading}>Contact Us</Text>
          <Text style={styles.subheading}>
            Feel free to ask for details, don't save any questions!
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name *"
            value={form.fullName}
            onChangeText={(text) => handleChange('fullName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address *"
            value={form.email}
            keyboardType="email-address"
            onChangeText={(text) => handleChange('email', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            value={form.mobile}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange('mobile', text)}
          />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Message *"
            value={form.message}
            multiline
            onChangeText={(text) => handleChange('message', text)}
          />

          <Text style={styles.questionText}>Do You Want To Support Good People?</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                form.supportGoodPeople === 'Yes' && styles.radioButtonSelected,
              ]}
              onPress={() => handleChange('supportGoodPeople', 'Yes')}
            >
              <Image
                source={require('@/assets/images/thumbsup.png')}
                style={styles.radioIcon}
              />
              <Text style={styles.radioLabel}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                form.supportGoodPeople === 'No' && styles.radioButtonSelected,
              ]}
              onPress={() => handleChange('supportGoodPeople', 'No')}
            >
              <Image
                source={require('@/assets/images/thumbsdown.png')}
                style={styles.radioIcon}
              />
              <Text style={styles.radioLabel}>No</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleEmail}>
            <Text style={styles.buttonText}>SEND MESSAGE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickContactContainer}>
          <Text style={styles.locationText}>Quick Contact:</Text>
          <View style={styles.iconRow}>
            <TouchableOpacity
              style={styles.iconCard}
              onPress={() => openLink('tel:9545339997')}
            >
              <Image
                source={require('@/assets/images/telephone.png')}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconCard}
              onPress={() => openLink('mailto:yogayogking@gmail.com')}
            >
              <Image
                source={require('@/assets/images/gmail.png')}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconCard}
              onPress={() => openLink('https://wa.me/9545339997')}
            >
              <Image
                source={require('@/assets/images/whatsapp.png')}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconCard}
              onPress={() =>
                openLink('https://www.youtube.com/@Yogayogking/videos')
              }
            >
              <Image
                source={require('@/assets/images/youtube.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Find Us Here:</Text>
          <TouchableOpacity onPress={openLocation} style={styles.mapLinkContainer}>
            <Image
              source={require('@/assets/images/gmap.png')}
              style={styles.mapIcon}
            />
            <Text style={styles.locationLink}>View on Google Maps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.membershipCard}>
          <Text style={styles.membershipTitle}>Join Our Membership</Text>
          <Text style={styles.membershipDescription}>499 rs only for a year</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contact Us')}
            style={styles.joinButton}
          >
            <Text style={styles.joinButtonText}>Join Here</Text>
          </TouchableOpacity>
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
  contactsection: {
    padding: 20,
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
  subheading: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 5,
    fontWeight: '500',
    color: '#555',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  radioButtonSelected: {
    borderColor: '#2b5f89',
    backgroundColor: '#f0f8ff',
  },
  radioIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#ff007f',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickContactContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  iconCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    width: 32,
    height: 32,
  },
  locationContainer: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    padding: 15,
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  mapLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  mapIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  locationLink: {
    fontSize: 16,
    color: '#2b5f89',
    textDecorationLine: 'underline',
    fontWeight: '500',
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
});
