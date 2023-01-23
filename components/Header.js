import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.2,
    backgroundColor: '#F4CE14'
  },
  headerText: { 
   textAlign: 'center',
   padding: 40,
   fontSize: '25',
  },
});
