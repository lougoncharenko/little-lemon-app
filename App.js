import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.content}>
       <Header />
       <WelcomeMessage />
      </View> 
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  content: {
    flex: 1
  },
});
