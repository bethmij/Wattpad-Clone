// src/Dashboard.tsx

import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');

const data = [
  { id: '1', title: 'Story 1', imageUrl: 'https://via.placeholder.com/150', author: 'Author 1' },
  { id: '2', title: 'Story 2', imageUrl: 'https://via.placeholder.com/150', author: 'Author 2' },
  { id: '3', title: 'Story 3', imageUrl: 'https://via.placeholder.com/150', author: 'Author 3' },
  { id: '4', title: 'Story 4', imageUrl: 'https://via.placeholder.com/150', author: 'Author 4' },
];

const featuredBook = {
  id: '1', title: 'Featured Story', imageUrl: 'https://via.placeholder.com/200', author: 'Featured Author'
};

const Dashboard: React.FC = () => {
  const renderItem = ({ item }: { item: { id: string; title: string; imageUrl: string; author: string } }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleStoryPress(item)}>
      <ImageBackground source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover">
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.gradient}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>By {item.author}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  const handleStoryPress = (story: { title: string }) => {
    // Handle story press action
    alert(`Viewing story: ${story.title}`);
  };

  const renderSection = (title: string, data: Array<{ id: string; title: string; imageUrl: string; author: string }>) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sectionContent}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.coverContainer}>
        <ImageBackground source={{ uri: featuredBook.imageUrl }} style={styles.coverImage} resizeMode="cover">
          <LinearGradient colors={['rgba(0,0,0,0.6)', 'transparent']} style={styles.coverGradient}>
            <Text style={styles.coverTitle}>{featuredBook.title}</Text>
            <Text style={styles.coverAuthor}>By {featuredBook.author}</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      {renderSection('Achieved Books', data)}
      {renderSection('Top Rated Books', data)}
      {renderSection('Top Recommended Books', data)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  coverContainer: {
    width: screenWidth,
    height: screenWidth * 0.6,
    marginBottom: 30,
  },
  coverImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  coverGradient: {
    padding: 15,
  },
  coverTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  coverAuthor: {
    fontSize: 18,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f56a79',
    marginLeft: 20,
    marginBottom: 15,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  sectionContent: {
    paddingHorizontal: 10,
  },
  card: {
    width: 160,
    height: 220,
    marginRight: 15,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  author: {
    fontSize: 14,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default Dashboard;
