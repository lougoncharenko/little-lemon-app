import {View, Text} from 'react-native';

export default function WelcomeMessage() {
    return (
      <View style={styles.WelcomeMessageContainer}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    WelcomeMessageContainer: {
      marginTop: 40,
      marginLeft: 40,
    },
    WelcomeMessageText: { 
     textAlign: 'center',
     fontSize: '25',
    },
  });
  