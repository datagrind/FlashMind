import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { FlashCard } from '../../src/models';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function FlashCardDetailsScreen() {
  const [flashCard, setFlashCard] = useState<FlashCard | null>(null);
  const { id } = useLocalSearchParams();
  const router = useRouter()

  useEffect(() => {
    const fetchFlashCard = async () => {
      if (id) {
        const flashCard = await DataStore.query(FlashCard, id as string);
        setFlashCard(flashCard || null);
      }
    };

    fetchFlashCard();
  }, [id]);

  if (!flashCard) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{flashCard.question}</Text>
      <Text style={styles.answer}>{flashCard.answer}</Text>
      <TouchableOpacity onPress={ () => router.back()}> 
        <Text style={{fontSize: 20, color: 'red'}}> Back </Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  answer: {
    fontSize: 18,
    color: '#333',
  },
});
