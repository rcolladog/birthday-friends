import { StyleSheet, Text, View } from "react-native";
import Friend from "../components/friend";
import Searcher from '../components/searcher';
import { globalStyles } from "../styles/global";
export default function Index() {

  return (
    <View style={globalStyles.container}>
      <Searcher />
      <View style={style.row}>
      <Text style={globalStyles.subtitles}>PRÓXIMOS CUMPLEAÑOS</Text>
      <Friend></Friend>
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