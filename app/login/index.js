import { Button, Input } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { router } from 'expo-router';
import { useSession } from '../../hooks/useSession';

const LoginPage = () => {
  const { login } = useSession();
  const [email, setEmail] = useState('');
  const [, setPassword] = useState('');

  const handleLogin = () => {
    login(email);
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg',
        }}
      />
      <Text style={styles.title}>Wena</Text>
      <Text style={styles.text}>Te logeai?</Text>
      <Input
        onChangeText={setEmail}
        keyboardType='email-address'
        placeholder='Usuario'
      />
      <Input
        onChangeText={setPassword}
        placeholder='Contraseña'
        secureTextEntry={true}
      />
      <Button
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
        onPress={handleLogin}
      >
        Entrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '25%',
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
  },
  title: {
    fontSize: 16,
  },
});

export default LoginPage;
