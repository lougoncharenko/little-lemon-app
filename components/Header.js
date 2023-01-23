import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View >
      <Text style={styles.header}>Little Lemon Resteraunt</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
   textAlign: 'center',
   fontSize: '25',
  },
});
