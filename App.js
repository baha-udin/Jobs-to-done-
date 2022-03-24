import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ResHeight, ResWidth} from './src/res/responsive';

const App = () => {
  const isDark = useColorScheme() == 'light';
  const [newInput, setNewInput] = useState('');
  const [allInput, setallInput] = useState([]);

  const handleSubmit = () => {
    setallInput([
      ...allInput,
      {
        id: Math.random().toString(),
        value: newInput,
      },
    ]);
    setNewInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <View style={styles.wrapContent}>
        <View style={styles.wrapTask}>
          <TextInput
            placeholder="masukkan task..."
            style={styles.taskInput}
            placeholderTextColor={'black'}
            value={newInput}
            onChangeText={value => setNewInput(value)}
          />
          <TouchableOpacity style={styles.wrapButton} onPress={handleSubmit}>
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{marginTop: ResHeight(16)}}>
          {allInput.map(data => (
            <View key={data.id} style={styles.wrapList}>
              <Text style={styles.text}>- {data.value}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#022844',
  },
  wrapTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  taskInput: {
    paddingVertical: ResHeight(12),
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    paddingHorizontal: ResWidth(16),
    letterSpacing: 1,
    fontWeight: '300',
  },
  wrapButton: {
    backgroundColor: 'white',
    paddingVertical: ResHeight(12),
    paddingHorizontal: ResWidth(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  wrapList: {
    flexDirection: 'row',
    paddingVertical: ResHeight(4),
    paddingHorizontal: '5%',
  },
  text: {color: 'white', fontSize: 16, fontWeight: '400', letterSpacing: 0.5},
});
