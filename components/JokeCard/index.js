import { Card } from '@rneui/base';
import { StyleSheet } from 'react-native';
import { View, Image, Text } from 'react-native-web';

const JokeCard = ({ icon_url: iconUrl, value }) => {
  return (
    <Card>
      <View style={styles.container}>
        <Image style={styles.icon} source={{ uri: iconUrl }} />
        <Text style={styles.text}>{value}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
});

export default JokeCard;
