import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeMessage() {
    return (
      <View style={styles.WelcomeMessageContainer}>
        <Text style={styles.WelcomeMessageText}>Welcome to Little Lemon</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    WelcomeMessageContainer: {
      marginTop: 40,
      backgroundColor: '#495E57',
    },
    WelcomeMessageText: { 
     textAlign: 'center',
     padding: 15,
     fontSize: '35',
     color: 'white',
    },
  });
  