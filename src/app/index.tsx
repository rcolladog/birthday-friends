import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Friend from "../components/friend";
import Searcher from '../components/searcher';
import { FriendInterface } from "../interface/friend";
import { friendService } from "../services/friendService";
import { globalStyles } from "../styles/global";
export default function Index() {

  const [friends, setFriends] = useState<FriendInterface[]> ([]);
  const [shownFriends, setShownFriends] = useState<FriendInterface[]> ([]);

  useEffect(()=> {friendService.getAll()
    .then((data)=>{setFriends(data), setShownFriends(data)})
    .catch((err)=> console.error("Error cargando los amigos:", err))}, []);

  const filterSearcher = (text:string) =>{const filteredNames = friends.filter((f)=>f.name.toLowerCase().trim().includes(text.toLowerCase().trim()))
  setShownFriends(filteredNames)};


  return (
    <View style={globalStyles.container}>
      <Searcher filterSearcher={filterSearcher}/>
      <View style={style.row}>
      <Text style={globalStyles.subtitles}>PRÓXIMOS CUMPLEAÑOS</Text>
      <Friend friends={shownFriends}></Friend>
      </View>
      <Pressable style={style.button} onPress={() => router.push("/add-friend")}>
        <Text style={style.text}>Agregar amigos</Text>
      </Pressable>
    </View>
  );
}
const style = StyleSheet.create({
 
  row:{
  marginTop:20,
  alignItems: "center",
  },
  text:{
    fontSize: 20,
    color: "#fff",
    margin:"auto",
    fontWeight: "600",
    
  },
  button:{
    backgroundColor: "#fa91b4",
    marginTop:"auto",
    alignSelf:"center",
    width:350,
    height:70,
    borderColor: "#fa91b4",
    borderRadius:25,
    marginBottom:25,
    marginRight:40,
     
  }
});