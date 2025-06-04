import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

export default function ProfilePage(){
  const [age, setAge] = useState('10');
  const [height, setGender] = useState("6'4");
  const [editAge, setEditAge] = useState(age);
  const [editGender, setEditGender] = useState(height);

  const handleUpdate = () => {
    setAge(editAge);
    setGender(editGender);
  };

  return (
    <View style={styles.container}>

      <View style={styles.profileBox}>
        <Image
          source={{ 
            uri: '/',
          }}
          style={styles.profileImage}
        />\
        <Text style={styles.name}>Eriifeoluwa Aliu</Text>
        <Text style={styles.detail}>Age: {age}</Text>
        <Text style={styles.detail}>Height: {height}</Text>
      </View>




      <View style={styles.editBox}>
        <Text style={styles.editTitle}>Edit Bio</Text>

        <Text style={styles.label}></Text>
        <TextInput
          style={styles.input}
          value={editAge}
          onChangeText={setEditAge}
          keyboardType="numeric"
          placeholder="Enter Age"
        />

        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.input}
          value={editGender}
          onChangeText={setEditGender}
          placeholder="Enter Height"
        />

        <Button title="Update" onPress={handleUpdate} />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  profileBox: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    backgroundColor: 'coral',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    marginTop: 4,
  },
  editBox: {
    borderTopWidth: 1,
    borderTopColor: 'coral',
    paddingTop: 20,
  },
  editTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: 'coral',
    borderRadius: 5,
    padding: 10,
  },
});
