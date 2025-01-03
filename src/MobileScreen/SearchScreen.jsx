import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
      const data = await response.json();
      setRepositories(data.items || []);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details', { repo: item })}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,alignItems:'center'}}>
        <Text>{item.owner.login}</Text>
        <Image source={{ uri: item.owner.avatar_url }} style={styles.ownerimg} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search GitHub Repositories"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={fetchRepositories} disabled={loading} />
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <FlatList
          data={repositories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 ,width:responsiveWidth(100)},
  input: { borderWidth: 1, padding: 8, marginBottom: 8, borderRadius: 4 },
  loading: { textAlign: 'center', marginVertical: 16 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc',width:responsiveWidth(90) },
  title: { fontWeight: 'bold' },
  ownerimg: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    borderRadius: responsiveHeight(4)
  }
});

export default SearchScreen;
