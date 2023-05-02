import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity}  from "react-native";
 
import database from "../../config/firebase";
import styles from "./style.js";

export default function Details({navigation, route}){
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTarefas = route.params.id
   
    function editTarefas(description, id){
      database.collection("Tarefas").doc(id).update({
        description: description,
      })
      navigation.navigate("Tarefas")
    }

    return(
        <View style={styles.container}>
          <Text style={styles.label}>Description</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex: Ir para academia"
          onChangeText={setDescriptionEdit}
          value={descriptionEdit}
          />
          <TouchableOpacity 
            style={styles.buttonNewTarefas}
            onPress={()=>{
              editTarefas(descriptionEdit, idTarefas)
            }}
          >
            <Text style={styles.iconButton}>Salvar</Text>
          </TouchableOpacity>
        </View>
      )
    }    