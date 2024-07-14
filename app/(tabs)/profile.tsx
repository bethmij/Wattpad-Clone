// src/Profile.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const Profile: React.FC = () => {
  // Sample user data (replace with actual user data)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum purus odio.',
    profileImage: './assets/profile.jpg',
    followers: 250,
    following: 150,
    stories: 30,
    website: 'https://example.com',
    twitter: '@johndoe',
    facebook: 'johndoe',
    instagram: 'johndoe',
  };

  return (
    <LinearGradient
      colors={['#ff5722', '#000']}
      style={styles.container}
    >
      <View style={styles.profileCard}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        <View style={styles.stats}>
          <Text style={styles.statText}>{user.followers} Followers</Text>
          <Text style={styles.statText}>{user.following} Following</Text>
          <Text style={styles.statText}>{user.stories} Stories</Text>
        </View>
        <View style={styles.socialLinks}>
          <TouchableOpacity onPress={() => openLink(user.website)}>
            <Text style={styles.link}>Website</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(`https://twitter.com/${user.twitter}`)}>
            <Text style={styles.link}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(`https://facebook.com/${user.facebook}`)}>
            <Text style={styles.link}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(`https://instagram.com/${user.instagram}`)}>
            <Text style={styles.link}>Instagram</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </LinearGradient>
  );
};

const openLink = (url: string) => {
  // Open links (implement your own linking logic)
  alert(`Opening: ${url}`);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  statText: {
    color: '#fff',
    fontSize: 16,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  link: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Profile;
