import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import topo from '../../../../assets/topo.png';
import Texto from '../../../componentes/Texto';

const width = 578 / 768 * Dimensions.get('screen').width;

export default function Topo(){
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da Cesta</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: width
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding:16
    }
})