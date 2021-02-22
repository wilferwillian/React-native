import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ImageBackground,
} from 'react-native';
import Carolina from '../assets/carolina-herrera.jpg';
import Mascara from '../assets/mascara.jpg';
import Perfume from '../assets/perfume.jpg';
import Paleta from '../assets/paleta.jpg';
import Backgroud from '../assets/bg_color.jpg';


export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Produtos',
        };
    };

    render() {
        return (
            <ScrollView>
                
                <View style={{ alignItems: 'center' }}>
                    
                <ImageBackground source={Backgroud} style={styles.bg}>
                <Text style={{ fontSize: 25, marginTop: 20, textAlign: 'center' ,color:'white'}}>
                    Tudo para a mulher moderna!!!!
                </Text>
                    <Image source={Carolina} style={styles.variedade}></Image>
                    <Text style={styles.titulo}>
                      Perfume Carolina Herrera
                    </Text>
                    <Text style={styles.preco}>
                        R$ 350,00
                    </Text>

                    <Image source={Perfume} style={styles.variedade}></Image>
                    <Text style={styles.titulo}>
                        Perfume Channel n° 05                  
                        </Text>
                    <Text style={styles.preco}>
                        R$ 360,00
                    </Text>

                    <Image source={Mascara} style={styles.variedade}></Image>
                    <Text style={styles.titulo}>
                        Mascara de olhinho
                    </Text>
                    <Text style={styles.preco}>
                        R$ 20,00
                    </Text>

                    <Image source={Paleta} style={styles.variedade}></Image>
                    <Text style={styles.titulo}>
                       Paleta Mary Kay
                    </Text>
                    <Text style={styles.preco}>
                        R$ 149,00
                    </Text>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    variedade: {
        width: 200,
        height: 200,
        marginTop: 50,
    },

    titulo: {
        marginTop:30,
        fontSize: 25,
        fontWeight: 'bold',
        color:'#f9f',
    },

    preco: {
        fontSize: 35,
        color: '#A33269',
        textShadowRadius: 3,
        textShadowColor: 'red',
        marginBottom: 60,
        marginTop:50,
    },

    bg: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}) 