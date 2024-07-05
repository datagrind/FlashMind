import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet, TextInput as RNTextInput } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { FlashCard } from '../src/models';
import CustomInput from '../components/CustomInput';

export default function CreateFlashCardScreen() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const questionRef = useRef<RNTextInput>(null);
  const answerRef = useRef<RNTextInput>(null);

  const createFlashCard = async () => {
    const newFlashCard = new FlashCard({
      question,
      answer,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await DataStore.save(newFlashCard);

    setQuestion('');
    setAnswer('');
    alert('Flash Card Created');

    questionRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <CustomInput
        ref={questionRef}
        style={styles.input}
        placeholder="Enter question"
        value={question}
        onChangeText={setQuestion}
      />
      <CustomInput
        ref={answerRef}
        style={styles.input}
        placeholder="Enter answer"
        value={answer}
        onChangeText={setAnswer}
      />
      <Button title="Create Flash Card" onPress={createFlashCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
