import { Input } from '@rneui/themed';
import axios from 'axios';
import { FlatList, View } from 'react-native-web';
import JokeCard from '../../components/JokeCard';
import { useState } from 'react';

const JokesView = () => {
  const [jokes, setJokes] = useState([]);

  const handleSearch = (text) =>
    text.length > 3 &&
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${text}`)
      .then(({ data }) => setJokes(data.result))
      .catch(console.error);

  return (
    <View style={{ flex: 1 }}>
      <Input placeholder='Buscar chiste' onChangeText={handleSearch} />
      <FlatList
        data={jokes}
        renderItem={({ item }) => <JokeCard {...item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

export default JokesView;
