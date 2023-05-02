import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import database from "../../config/firebase.js";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function Tarefas({ navigation }) {
    const [Tarefas, setTarefas] = useState([]);
   
    function deleteTarefas(id) {
      database.collection("Tarefas").doc(id).delete();
    }
   
    useEffect(() => {
      database.collection("Tarefas").onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setTarefas(list);
      });
    }, []);

        return (
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Tarefas}
            renderItem={( { item } )=>{
               return(
              <View style={styles.Tarefas}>
                <TouchableOpacity
                  style={styles.deleteTarefas}
                  onPress={() => {
                    deleteTarefas(item.id)
                  }}
                >
                <FontAwesome
                  name="star"
                  size={23}
                  color="BACC21"
                >
                </FontAwesome>
                </TouchableOpacity>
                <Text
                  style={styles.DescriptionTarefas}
                  onPress={()=>
                    navigation.navigate("Details",{
                      id: item.id,
                      description: item.description,
                    })
                  }
                >
                {item.description}  
                </Text>  
     
              </View>
              )
            }}
          />
          <TouchableOpacity
            style={styles.buttonNewTarefas}
            onPress={() => navigation.navigate("New Tarefas")}
          >
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity>
        </View>
      );
    ;
    }