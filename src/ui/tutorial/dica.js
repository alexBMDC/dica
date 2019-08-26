import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Dimensions, Text, Modal, TouchableOpacity, Alert} from 'react-native'

import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

export default class Dica extends Component{

    constructor (props){
        super(props);
        this.state= {
            visible: true
        };
        this.fecharModal = this.fecharModal.bind(this);
    }

    
    fecharModal = () => {
        this.setState({ visible: false });
    }
    
    //Caso primeira ou ultima tela, ele retorna o botao certo
    whatButton = (index)=> {
        if(index==0){
            return (
                <TouchableOpacity
                onPress={this.fecharModal}
                style={styles.buttonWithTextw}
                >
                    <Text style={styles.text}>Pular</Text>
                </TouchableOpacity>
                );
        }
        //lenght da array entra no lugar do 2 no
        else if (index==2){
            return (
                <TouchableOpacity
                onPress={this.fecharModal}
                style={styles.buttonWrapper}
                >
                    <Text style={styles.buttonArrow}>›</Text>
                </TouchableOpacity>
            );
        }
    };

    //Funcao que monta as telas conforme imagem e quantidade de imagens
    modalDica = ()=> (
        <Modal
        animationType="none"
        visible={this.state.visible}>
            <Swiper style={styles.basic}
            showsButtons={true}
            loop={false}
            loadMinimal={true}
            >
                {this.props.locations.map((location, index) => (
                    <View key={index} style={styles.basic}>
                        <ImageBackground source={location.image} style = {styles.img} resizeMode= 'stretch'>
                            {this.whatButton(index)}
                        </ImageBackground>
                    </View>
                ))}
            </Swiper>
        </Modal>
    )
   
    render() {
        return (
            <View style={styles.basic}>
                {this.modalDica()}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    basic:{
    flex:1
    },

    img:{
    width,
    flex: 1
    },

    buttonText:{
    },

    buttonWrapper:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
    },

    buttonArrow:{
    fontSize: 50,
    color: '#007aff'
    }
})