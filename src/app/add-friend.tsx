import { Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AddFriend() {

    return (

        <View style={style.container}>
            <Image style={style.image}></Image>
            <Text style={globalStyles.text}>Foto opcional</Text>

            <View style={style.row}>
            <Text>NOMBRE</Text>


            </View>

        </View>

    );
}

const style = StyleSheet.create({

    container: {
        flexDirection: "column", alignItems: "center"
    },
    image: {
        borderRadius: 100,
        width: 150,
        height: 150,
        marginLeft: 20,
        borderWidth: 4,
        borderColor: "#fa91b4",
        borderStyle:"dashed",
        marginBottom:20
    },
    row:{
        alignSelf:"flex-start",
    }


});


