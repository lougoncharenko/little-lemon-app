import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeMessage() {
    return (
      <View style={styles.WelcomeMessageContainer}>
        <Text style={styles.WelcomeMessageText}>Welcome to Little Lemon</Text>
        <View style={styles.WelcomeMessageContent}>
            <Text style={styles.WelcomeMessageContentText}>
                Little Lemon is a charming local bistro that
                serves farm-to-table food and classic cocktails in a
                lively but casual enviroment. We would love to have you
                as our guests in our fine establishment and hear more 
                about your experience with us!
            </Text>
        </View>
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
    WelcomeMessageContent: {
        marginTop: 40,
        alignItems: 'center',
        padding: 15,
    },
    WelcomeMessageContentText: {
        color: '#EDEFEE',
        fontSize: 22,
        marginVertical: 8,
        lineHeight: 30,
    }
  });
  