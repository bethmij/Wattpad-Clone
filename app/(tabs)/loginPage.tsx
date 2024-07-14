// src/LoginPage.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login Successful', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://your-image-url.com/background.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Wattpad Clone</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} color="#f56a79" />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f56a79',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default LoginPage;
