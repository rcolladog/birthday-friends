import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Friend from "../components/friend";
import Searcher from '../components/searcher';
import { FriendInterface } from "../interface/friend";
import { friendService } from "../services/friendService";
import { globalStyles } from "../styles/global";
export default function Index() {

  const [friends, setFriends] = useState<FriendInterface[]> ([]);

  useEffect(()=> {friendService.getAll().then(setFriends).catch((err)=> console.error("Error cargando los amigos:", err))}, []);


  return (
    <View style={globalStyles.container}>
      <Searcher />
      <View style={style.row}>
      <Text style={globalStyles.subtitles}>PRÓXIMOS CUMPLEAÑOS</Text>
      <Friend friends={friends}></Friend>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
 
  row:{
  marginTop:20,
  alignItems: "center",
  },
  text:{
    fontSize: 15
  },
});