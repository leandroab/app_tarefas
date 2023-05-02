import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from '../../config/firebase'
import styles from "./style";

export default function NewTarefas({ navigation }, props) {
 
    const [description, setDescription] = useState(null);
   
    function addTarefas(){
      database.collection('Tarefas').add({
        description: description,
        status: false
      })
      navigation.navigate("Tarefas");
    }

    return(
        <View style={styles.container}>
          <Text style={styles.label}>Descricao</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex: Ir na academia"
          onChangeText={setDescription}
          value={description}
          />
          <TouchableOpacity 
            style={styles.buttonNewTask}
            onPress={()=>{
              addTarefas()
            }}
          >
            <Text style={styles.iconButton}>Salvar</Text>
          </TouchableOpacity>
        </View>
      )
    }   