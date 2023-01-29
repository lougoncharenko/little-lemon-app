import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          <Header />
        <WelcomeMessage />
        <MenuItems />
        </View> 
      </ScrollView>
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
