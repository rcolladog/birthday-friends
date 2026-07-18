import { StyleSheet as RNStyleSheet, Text, View } from 'react-native';

export default function Friend({ name, birthday }:{name:string, birthday:string}) {

    const actualDate = new Date().getDate;

    return (
        <View style={style.div}>
            
             <Text style={style.name}>{name}</Text>
             <Text style={style.date}>En {birthday} días</Text>

        </View>
    );
}

const style = RNStyleSheet.create({
    div: {
        width: 350, height: 80, marginTop: 20,
        borderRadius: 20, borderWidth: 1, borderColor: "#fa91b4",  
    },

    name:{
        color: "#fff",
        fontSize: 17,
        alignSelf: "flex-start",
        marginLeft: 80,
        marginTop:20
    },
    date:{
         color: "#7c7c7c",
         fontSize: 17,
         alignSelf: "flex-start",
         marginLeft: 80,
         marginTop: 2
    }
    

})