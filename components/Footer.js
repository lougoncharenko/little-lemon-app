import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>All rights reserved by Little Lemon, 2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0.2,
    backgroundColor: '#F4CE14'
  },
  headerText: { 
   padding: 15,
   fontSize: '15',
  },
});
