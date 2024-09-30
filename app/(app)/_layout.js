import { Redirect, Slot } from 'expo-router';
import { useSession } from '../../hooks/useSession';
import { View, Text } from 'react-native-web';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

const AppLayout = () => {
  const { session, logout } = useSession();

  if (!session) {
    return <Redirect href='/login' />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text>{session.email}</Text>
        <Button onPress={logout}>Salir</Button>
      </View>
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: '10%',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
  },
});

export default AppLayout;
