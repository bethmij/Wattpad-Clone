import React, { useState, } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useNavigation } from 'expo-router';
import App from '@/App';

const Index: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const navigation = useNavigation();

  // const handleLogin = () => {
  //   Alert.alert('Login Successful', `Email: ${email}\nPassword: ${password}`);
  //   navigation.push('./reading');
  // };

  // const handleForgotPassword = () => {
  //   Alert.alert('Forgot Password', 'Redirecting to forgot password screen');
  // };

  // const handleGoogleLogin = () => {
  //   Alert.alert('Google Login', 'Redirecting to Google login');
  // };

  // const handleFacebookLogin = () => {
  //   Alert.alert('Facebook Login', 'Redirecting to Facebook login');
  // };

  // return (
  //   <ImageBackground
  //     source={{ uri: './assets/login.jpg' }}
  //     style={styles.background}
  //     resizeMode="cover"
  //   >
  //     <LinearGradient
  //       colors={['rgba(0,0,0,0.8)', 'transparent']}
  //       style={styles.gradient}
  //     >
  //       <View style={styles.container}>
  //         <Image
  //           source={{ uri: './assets/background.jpeg.png' }}
  //           style={styles.logo}
  //         />
  //         <Text style={styles.header}>Wattpad</Text>
  //         <TextInput
  //           style={styles.input}
  //           placeholder="Email"
  //           placeholderTextColor="#ccc"
  //           onChangeText={setEmail}
  //           value={email}
  //           keyboardType="email-address"
  //         />
  //         <TextInput
  //           style={styles.input}
  //           placeholder="Password"
  //           placeholderTextColor="#ccc"
  //           onChangeText={setPassword}
  //           value={password}
  //           secureTextEntry
  //         />
  //         <Button title="Login" onPress={()=>router.push('./reading')} color="#f56a79" />
  //         <TouchableOpacity onPress={handleForgotPassword}>
  //           <Text style={styles.forgotPassword}>Forgot Password?</Text>
  //         </TouchableOpacity>
  //         <Text style={styles.or}>OR</Text>
  //         <View style={styles.socialButtons}>
  //           <Button title="Login with Google" onPress={handleGoogleLogin} color="#db4437" />
  //           <Button title="Login with Facebook" onPress={handleFacebookLogin} color="#3b5998" />
  //         </View>
  //       </View>
  //     </LinearGradient>
  //   </ImageBackground>
  // );

   return (
     <App/>
   )
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f56a50',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#00000',
    marginTop: 10,
    marginBottom: 20,
  },
  or: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    marginTop: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default Index;
