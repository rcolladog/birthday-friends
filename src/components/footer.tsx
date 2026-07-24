import { Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { Pressable, StyleSheet as RNStyleSheet, View } from 'react-native';

export default function Footer() {
const path=usePathname();

return (
      <View style={style.container}>
        <Pressable onPress={()=> router.push("/")}> 
            <Ionicons style={path=== "/" ? style.activeIcon : style.icons} name="home-outline" size={24} color="white" />
        </Pressable>
      
       <Ionicons style={path=== "" ? style.activeIcon : style.icons} name="calendar-outline" size={24} color="white" />
       <Ionicons style={[path=== "" ? style.activeIcon : style.icons]} name="notifications-outline" size={24} color="white" />
      </View>
    );

}

const style= RNStyleSheet.create({
    container:{flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"center",
        gap:60, 
        height:90, 
        width:"100%",   
        backgroundColor:"#121111", 
        borderTopWidth:1, 
        color:"#242424",
        borderColor:"#4b4a4a"},
        
    icons:{color:"gray"
    },
    activeIcon:{
        color:"pink"
    }



});