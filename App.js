import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//components
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    padding: 45,
  },
});
