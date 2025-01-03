import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const DetailsScreen = ({ route }) => {
  const { repo } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: repo.owner.avatar_url }}
        style={styles.avatar}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          width: responsiveWidth(70),
          elevation: 2,
          backgroundColor: '#fff',
          height: responsiveHeight(13),
          padding: 10,
          borderRadius: 8,
          overflow:'hidden'
        }}
      >
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Name:</Text>
          <Text style={styles.tableCell}>{repo.name}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Description:</Text>
          <Text style={styles.tableCell}>
            {repo.description || 'No description available'}
          </Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Stars:</Text>
          <Text style={styles.tableCell}>{repo.stargazers_count}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Forks:</Text>
          <Text style={styles.tableCell}>{repo.forks_count}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Language:</Text>
          <Text style={styles.tableCell}>
            {repo.language || 'Not specified'}
          </Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Owner:</Text>
          <Text style={styles.tableCell}>{repo.owner.login}</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', width: responsiveWidth(100) },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#000' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginVertical: 20 },
  tableRow: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  tableHeader: {
    fontWeight: 'bold',
    marginRight: 5,
    flex: 1,
  },
  tableCell: {
    flex: 2,
  },

});

export default DetailsScreen;
