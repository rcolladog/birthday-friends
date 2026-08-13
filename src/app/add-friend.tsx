import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { friendService } from '../services/friendService';


export default function AddFriend() {
     const { id } = useLocalSearchParams();
    const [birthday, setBirthday] = useState(new Date());
    const [isEnabled, setIsEnabled] = useState(false);
    const [image, setImage] = useState<string | undefined>(undefined);
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<{ name: string }>();

     useEffect(() => {
        if (id) {
            friendService.getById(id as string).then((data) => {
                if (data) {
                    setBirthday(new Date(data.birthday));
                    setImage(data.image);
                    setIsEnabled(data.reminder || false);
                    setValue("name", data.name);
                }
            });
        }
    }, [id, setValue]);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const onSubmit = async (data: { name: string }) => {
         try {
            if (id) {
                // Editar
                await friendService.update(id as string, {
                    name: data.name,
                    birthday: birthday.toISOString().split("T")[0],
                    image: image,
                    reminder: isEnabled,
                });
            } else {
                // Crear nuevo
                await friendService.create({
                    name: data.name,
                    birthday: birthday.toISOString().split("T")[0],
                    image: image,
                    reminder: isEnabled,
                });
            }
            router.push("/");
        } catch (error) {
        console.error("Error creando amigo:", error);
    }
    }

    return (

        <View style={style.container}>
            <Pressable onPress={pickImage} style={style.image}>
                {image ? (
                    <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
                ) : (
                    <Ionicons name="camera-outline" size={40} color="grey" />
                )}
            </Pressable>

            <Text style={style.textImage}>Foto (opcional)</Text>

            <View style={style.row}>
                <Text style={style.title}>NOMBRE</Text>
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: "El nombre no puede estar vacío" }}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={[style.input, errors.name && style.inputError]}
                            placeholder='Nombre de tu amigo'
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.name && <Text style={style.errorText}>{errors.name.message}</Text>}

    

                <Text style={style.title}>RECORDATORIO</Text>

                <View style={[style.input, style.inputSwitch]}>
                    <Text style={style.text}>Avisar el día de antes</Text>
                    <Switch style={style.switch} value={isEnabled} onValueChange={setIsEnabled} trackColor={{ false: "#ccc", true: "#fa91b4" }}></Switch>
                </View>

                 <Text style={style.title}>FECHA CUMPLEAÑOS</Text>

                <Pressable style={style.inputDate} >
                    <DateTimePicker
                        value={birthday}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            if (selectedDate) setBirthday(selectedDate);
                        }}
                    />
                </Pressable>
            </View>

           

            <Pressable style={style.saveButton} onPress={handleSubmit(onSubmit)}>
                <Text style={style.whiteText}>{id ? "Guardar Cambios" : "Guardar"}</Text>
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
    whiteText: { color: "white", fontSize: 20, fontWeight: "600", },

    inputDate: {
         flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        width: 140,
        height: 50,
        color: "#fff",
        fontSize: 18,
        paddingRight:20,
    },
    inputSwitch: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        alignItems: "center"
    },
    inputError: {
        borderColor: "red",
    },
    errorText: {
        color: "red",
        fontSize: 14,
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
    },
    switch: { marginTop: 10 }

});


