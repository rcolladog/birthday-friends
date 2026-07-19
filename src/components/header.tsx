import { router, usePathname } from 'expo-router';
import { Pressable, StyleSheet as RNStyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/global';

export default function Header() {
  const safeArea = useSafeAreaInsets();
  const pathname = usePathname();

  if (pathname === "/add-friend") {
    return (
      <View style={[style.header, style.headerFriend, { paddingTop: safeArea.top }]}>
        <Pressable style={style.button}  onPress={() => router.push("/")}>
          <Text style={{color:"white"}}>Inicio</Text>
          </Pressable>
        <Text style={globalStyles.title}>Añadir amigos</Text>
      </View>
    );
  }

  return (
    <View style={[style.header, { paddingTop: safeArea.top }]}>
      <Text style={globalStyles.title}>BIRTHDAYFRIENDS</Text>
      <Text style={globalStyles.text}>Mis Amigos</Text>
    </View>
  );
}

export const style = RNStyleSheet.create({
  header: {
    backgroundColor: "#fa91b4",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 40,
    
  },
  headerFriend:{flexDirection: "row",justifyContent: "flex-start",  alignItems: "center",  },
  button:{
    width:100,
    height:50, 
    borderWidth:2, 
    borderColor: "pink",
    marginRight:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100
    
  },
});
