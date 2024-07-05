import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlashMind</Text>
      <Link href="/create" asChild>
        <Button title="Create Flash Card" />
      </Link>
      <Link href="/list" asChild>
        <Button title="View Flash Cards" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
  },
});
