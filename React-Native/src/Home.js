import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import Backgroud from '../assets/bg_color.jpg';
import Logo from '../assets/logo.png';
import Btn from '../assets/bg_btn.jpg';

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <StatusBar hidden />

                <ImageBackground source={Backgroud} style={styles.bg}>

                    <Image source={Logo} style={styles.logo}></Image>

                    <Text style={styles.textoInicial}>Loja Da'Juh</Text>
                    <Text style={styles.textoSecundario}>Onde Você encontra de tudo um pouco</Text>

                    <View style={styles.containerBtn}>
                        <ImageBackground source={Btn} style={styles.bg_btn}>
                            <TouchableOpacity onPress={() => navigate('Login')}>
                                <Text style={styles.h1}>Login</Text>
                            </TouchableOpacity>
                        </ImageBackground>

                        <ImageBackground source={Btn} style={styles.bg_btn} >
                            <TouchableOpacity onPress={() => navigate('Produtos')}>
                                <Text style={styles.h1}>Visite a Loja</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                </ImageBackground>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 200,
        height: 200,
    },

    textoInicial: {
        textAlign: 'center',
        fontSize: 30,
        color:'white',
    },

    textoSecundario: {
        textAlign: 'center',
        fontSize: 30,
        color:'#f9f',
    },
    
    bg_btn: {
        width: 100,
        height: 50,
        marginTop: 10,
        marginLeft: 5,
        justifyContent: 'center',
    },

    containerBtn: {
        flexDirection: 'row',
    },

    h1: {
        fontSize: 20,
        textAlign: 'center',
        textShadowColor: 'red',
        textShadowRadius: 1.5,
    }
});
