import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import * as SecureStorage from 'expo-secure-store'
import { Card, Person } from './components/Card';


//let people:Person[]
const KEY_ON_STORAGE = "links"
export default function App() {

  const [name, setName] = useState<string>('Vacio')
  const [age, setAge] = useState<number>(0) 
  const [peopleList, setPeopleList] = useState<Person[]>([]) 
  
  useEffect(() => {
    
    SecureStorage.getItemAsync(KEY_ON_STORAGE).then(res =>{
      if(res != null)
        setPeopleList(JSON.parse(res))
      
      console.log(res);  

    })
  }, [])


  function agregar(person:Person) {

    setPeopleList([...peopleList,person])
    Save()
  }


  async function Save() {

    let datosString = JSON.stringify(peopleList)
    await SecureStorage.setItemAsync("links",datosString)

  }


  return (
    <View style={styles.container}>
      <FlatList data={peopleList} renderItem={({item}) => <Card person={item}/>}/>

      <View style={styles.inputs}>
          <Text>Datos:</Text>
          <TextInput value={name} onChangeText={setName} placeholder="Nombre"/>
          <TextInput value={age.toString()} onChangeText={(text)=> setAge(Number(text))} placeholder="Edad"/>
          <Button title="Agregar" onPress={()=> agregar({age:age,key:name})}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    padding:10
  }
});
