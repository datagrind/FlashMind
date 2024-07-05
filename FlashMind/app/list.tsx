import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { FlashCard } from '../src/models';
import { Link, useRouter } from 'expo-router';

export default function ListFlashCardsScreen() {
  const [flashCards, setFlashCards] = useState<FlashCard[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchFlashCards = async () => {
      const flashCards = await DataStore.query(FlashCard);
      setFlashCards(flashCards);
    };

    fetchFlashCards();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={flashCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Link href={`/flashcard/${item.id}`} asChild>
              <Text style={styles.title}>{item.question}</Text>
            </Link>
            <TouchableOpacity onPress={ () => router.back()}> 
                <Text style={{fontSize: 20, color: 'red'}}> Back </Text> 
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    color: '#333',
  },
});
