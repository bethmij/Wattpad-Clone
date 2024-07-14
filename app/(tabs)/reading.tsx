// ReadingPage.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,Button } from 'react-native';
import { router } from 'expo-router';

const ReadingPage: React.FC = () => {
  // Example book content
  const book = {
    title: 'The Shadow of Destiny',
    author: 'Emily Rivers',
    coverImage: './assets/cover.jpg',
    content: `
      Chapter 1: The Beginning

      Sarah woke up with a start, the room bathed in the soft glow of dawn. 
      As she blinked away the remnants of sleep, she could feel a strange energy in the air, 
      as if something extraordinary was about to unfold. 

      She swung her legs off the bed, the cold wooden floor sending a shiver up her spine. 
      The dreams from last night still lingered, fragments of memories she couldn't quite grasp. 
      But one image stood out vividly—a shadowy figure standing at the edge of the forest, 
      its eyes gleaming with an otherworldly light.

      Sarah shook her head, trying to dispel the unsettling feeling that gripped her heart. 
      It was just a dream, she reassured herself. 
      But deep down, she knew there was more to it—a mystery waiting to be unraveled, 
      secrets waiting to be discovered.

      Little did she know, her journey was about to begin—a journey that would take her 
      beyond the realms of reality, into a world where shadows danced with destiny.

      Chapter 2: Into the Unknown

      Days turned into weeks, and Sarah couldn't shake off the feeling of being watched. 
      Everywhere she went, she felt those piercing eyes following her every move. 
      Was it paranoia, or was there truly someone—or something—watching her?

      She decided to confide in her best friend, Alex. 
      Together, they delved into ancient texts and whispered legends, searching for clues 
      that might shed light on the mysteries surrounding Sarah's dreams.

      "There's a legend," Alex said one evening, his voice barely above a whisper. 
      "A legend that speaks of a shadow realm, where beings of light and darkness coexist. 
      They say those who venture into the shadow realm never return the same—they either find 
      enlightenment or succumb to the shadows."

      Sarah listened intently, her mind racing with possibilities. 
      Could her dreams be a glimpse into this shadow realm? 
      And if so, what did it mean for her—and for the world as she knew it?

      Chapter 3: The Threshold

      One stormy night, as lightning cracked across the sky and thunder roared like a wounded beast, 
      Sarah found herself standing at the edge of the forest—the same forest from her dreams. 
      The air crackled with energy, the boundary between reality and dreams blurring into a haze of uncertainty.

      She took a step forward, her heart pounding in her chest. 
      The forest beckoned, its ancient trees whispering secrets of times long forgotten. 
      With each step, Sarah felt herself drawn deeper into the unknown, 
      her fear mingling with a sense of exhilaration she had never known before.

      And then, she saw it—the shadowy figure from her dreams, its eyes locking with hers in a silent exchange. 
      There was no turning back now. Sarah had crossed the threshold, 
      stepping into a world where every shadow held a story, every whisper carried the weight of destiny.

      To be continued...

      `,
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.coverImage }} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>by {book.author}</Text>

          <Text style={styles.content}>{book.content}</Text>

      </View>
      {/* <Button title="Login" onPress={()=>router.back()} color="#f56a79" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  coverImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  contentContainer: {
    backgroundColor: '#fffff',
    borderRadius: 10,
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },

  content: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
});

export default ReadingPage;
