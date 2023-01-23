import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>All rights reserved by Little Lemon, 2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#F4CE14',
    position: 'fixed',
    bottom: 0,
  },
  footerText: { 
   padding: 15,
   fontSize: 10,
   textAlign: 'center',
  },
});
