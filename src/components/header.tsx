import { StyleSheet as RNStyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/global';

export default function Header (){
     const safeArea = useSafeAreaInsets();

    return(
        <View style={[style.header, {paddingTop:safeArea.top}]}>
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
    paddingBottom:20,
    marginBottom:40
  },
});
