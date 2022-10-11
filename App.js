import React, {useState} from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  
  const [text, setText] = useState('');
  
  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1,}} onChangeText={(text) => setText(text) }/>
      <Button title="Press to hear" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});