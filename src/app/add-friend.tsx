import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { friendService } from '../services/friendService';

export default function AddFriend() {

    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState(new Date());
    const [isEnabled, setIsEnabled] = useState(false);


    const saveFriend = () => { friendService.create({ name, birthday: birthday.toISOString().split("T")[0] }) };

    return (

        <View style={style.container}>
            <View style={style.image}>
                <Ionicons name="camera-outline" size={40} color="grey" />
            </View>
            <Text style={style.textImage}>Foto (opcional)</Text>

            <View style={style.row}>
                <Text style={style.title}>NOMBRE</Text>
                <TextInput style={style.input} placeholder='Nombre de tu amigo' value={name} onChangeText={setName}></TextInput>
                <Text style={style.title}>FECHA CUMPLEAÑOS</Text>
                <Pressable style={[style.input, style.inputDate]} >


                    <DateTimePicker
                        value={birthday}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            if (selectedDate) setBirthday(selectedDate);
                        }}
                    />

                </Pressable>

                <Text style={style.title}>RECORDATORIO</Text>
                <View style={[style.input, style.inputSwitch]}>
                    <Text style={style.text}>Avisar el día de antes</Text>
                    <Switch style={style.switch} value={isEnabled} onValueChange={setIsEnabled} trackColor={{ false: "#ccc", true: "#fa91b4" }}></Switch>
                </View>
            </View>

            <Pressable style={style.saveButton} onPress={saveFriend}>
                <Text style={style.whiteText}>Guardar</Text>
            </Pressable>

        </View>

    );
}

const style = StyleSheet.create({

    container: {
        flexDirection: "column", alignItems: "center", flex: 1
    },
    image: {
        borderRadius: 100,
        width: 150,
        height: 150,
        marginLeft: 20,
        borderWidth: 4,
        borderColor: "#fa91b4",
        borderStyle: "dashed",
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        alignSelf: "flex-start", marginLeft: 30, flex: 1
    },
    title: { color: "grey", fontSize: 18, marginTop: 20, marginBottom: 10 },
    text: { color: "grey", fontSize: 18 },

    textImage: { color: "grey", fontSize: 18, marginTop: 5 },

    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#fa91b4",
        borderRadius: 15,
        paddingHorizontal: 15,
        color: "#fff",
        fontSize: 18,


    },
    saveButton: {
        backgroundColor: "#fa91b4",
        marginTop: "auto",
        alignSelf: "center",
        width: 350,
        height: 70,
        borderColor: "#fa91b4",
        borderRadius: 25,
        marginBottom: 25,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    whiteText: { color: "white", fontSize: 16, fontWeight: "bold" },

    inputDate: {
        alignItems: "flex-start",
        justifyContent: "center",
        width:185

    },
    inputSwitch: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        alignItems: "center"
    },
    switch: { marginTop: 10 }



});


