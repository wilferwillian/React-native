import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground
} from 'react-native';
import Backgroud from '../assets/bg_color.jpg';

export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Login',
        };
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView  behavior="position" enabled>
                <View style={styles.container}>
                <ImageBackground source={Backgroud} style={styles.bg}>

                    <View style={{ marginTop: '35%' }}>
                        <Text style={styles.textoInicial}>
                            Ei menina! se cadastra logo, para ter acesso aos produtos!
            </Text>

                    </View>
                    <TextInput style={styles.input} placeholder={'Usuário'} />
                    <TextInput style={styles.input} placeholder={'Senha'} secureTextEntry={true} />

                    <TouchableOpacity style={styles.btn} onPress={() => navigate('Produtos')}>
                        <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', marginTop: 5 }}>
                            Logar
                </Text>
                    </TouchableOpacity>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        width: '90%',
        height: '15%',
        fontSize: 18,
        marginTop: 10,
        paddingLeft: 10,
    },

    container: {
        alignItems: 'center',
    },

    textoInicial: {
        textAlign: 'center',
        fontSize: 25,
        color:'#f9f',
    },

    btn: {
        marginTop: 10,
        backgroundColor: 'purple',
        width: 100,
        height: 50,
        borderRadius: 10,

    },
    bg: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})