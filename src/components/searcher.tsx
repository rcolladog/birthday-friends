import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { StyleSheet as RNStyleSheet, TextInput, View } from 'react-native';


export default function Searcher() {

    const [search, setSearch] = useState("");
    return (
        <View style={style.container}>
            <Ionicons style={style.icon} name='search' size={20}></Ionicons>
            <View>
                <Ionicons/>
            </View>
            <TextInput style={style.input} placeholder="Buscar amigo..." onChangeText={setSearch} value={search} />
        </View>
    );
}

const style = RNStyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",

    },
    icon:{
        color: "gray",
        marginRight:10,
        position: "absolute",
        left:19,
        zIndex: 1,
    },
    input: {
        backgroundColor: "#1e1e1e",
        color: "gray",
         fontSize: 18,
        borderRadius: 15,
        height: 60,
        width: 350,
        paddingLeft:45,
        borderWidth: 0.2,
        borderColor:"grey"
    }
});