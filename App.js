import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const logoImg = require('./assets/Head.jpg');
const logoImg_1 = require('./assets/Filter.jpg');
const logoImg_2 = require('./assets/Learning.jpg');
const logoImg_3 = require('./assets/Woman.jpg');
const logoImg_4 = require('./assets/Woman.jpg'); 
import Categories from "./Categories";

export default function App() {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hello, Devs</Text>
          <Text style={styles.subtitle}>14 tasks today</Text>
        </View>
        <Image source={logoImg} style={styles.icon} />
      </View>

      <View style={styles.row}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <Image source={logoImg_1} style={styles.anotherIcon} />
      </View>
     
      <Categories/>
      
      <Text style={styles.style_1}>Ongoing tasks</Text>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mobile App Development</Text>
         
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Web Development </Text>
         
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>UI/UX Design</Text>
          
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Data Sciences</Text>
          
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Machine Learning</Text>
          
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cloud Computing</Text>
          
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cybersecurity</Text>
          
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Blockchain Technology</Text>
          
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Artificial Intelligence</Text>
          
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  anotherIcon: {
    width: 50,
    height: 50,
    borderRadius: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBF9F7',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    flex: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  categoriesContainer: {
    marginTop: -10,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '95%', 
    height: 250,
    borderRadius: 50,
    resizeMode: 'contain',
    marginTop: -50,
  },
  style_1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -50,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    height: 150,
    marginTop: 10,

  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'justify',
  },
});