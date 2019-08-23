import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Dimensions, Text, Modal, TouchableOpacity} from 'react-native'

import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

export default class Dica extends Component{

    constructor (props){
        super(props);
        this.state= {
            visible: true
        };
        this.fecharModal= this.fecharModal.bind(this);
    }

    fecharModal () {
        let s= this.state;
        s.visible = false;
        this.setState(s);
    }

    

    render(){
      
        const {locations} = this.props;

        const pular = (

             <TouchableOpacity
                onPress={this.fecharModal}
                style={styles.button}
            >
                <Text style={styles.text}>Pular</Text>
            </TouchableOpacity>
        );
        
        const finalizar = (

            <TouchableOpacity
               onPress={this.fecharModal}
               style={styles.button}
           >
               <Text style={styles.text}>Finalizar</Text>
           </TouchableOpacity>
       );

       //contem o que será mostrado na tela= modal, swiper e logica para percorrer array recebida por Dica
        const modalDica = (
            <Modal
            animationType="none"
            visible={this.state.visible}>

                <Swiper style={styles.wrapper}
                showsButtons={true}
                loop={false}
                loadMinimal={true}>

                    {locations.map((name, index) => (
                        <View key={name} style={styles.slide}>
                            <ImageBackground source={name.image} style = {styles.img} resizeMode= 'stretch'>
                                {pular}
                            </ImageBackground>
                        </View>
                    ))}

                </Swiper>

            </Modal>
        );
        
        return (
            <View style={styles.basic}>
                {modalDica}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img:{
        width,
        flex: 1
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    wrapper: {
    },
    basic:{
        flex:1
    },
    button:{
        alignSelf:'flex-end',
        backgroundColor:'#00FF00',
        width: 33
    },
    text:{
    }
})