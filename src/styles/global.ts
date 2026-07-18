import { StyleSheet as RNStyleSheet } from "react-native";

export const globalStyles = RNStyleSheet.create({
  container:{
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 40,
  },
  center:{flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    opacity:0.8,
  },
  subtitles:{
    color: "#7c7c7c",
    fontSize: 17,
    alignSelf: "flex-start",
    
   
  },
  background:{
    backgroundColor:"#121212"
  }
});