import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}> Little Lemon Resteraunt</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    backgroundColor: '#F4CE14',
   

  },
  headerText: { 
   textAlign: 'center',
   padding: 15,
   fontSize: '30',
   color: '#495E57',
  },
});
