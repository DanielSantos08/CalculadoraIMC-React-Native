import React from "react";
import {View, Share, Text, TouchableOpacity} from "react-native";
import styles from "./styles";

/*   definir a funcao para demonstrar mensagem e o resultado do calculo
     A ideia eh receber o objeto resultado com 2 props, 
     uma mensagem e um valor correspondente ao IMC calculado
*/

export default function ResultadoIMC(resultado){

        const onShare = async () => {
            const result = await Share.share({
              message:
                "Meu IMC é: "+resultado.valorResultado,
            });
        }

    return(
        <View style={styles.resultImc}>
            <View style={styles.boxShared}>
                <Text style={styles.informacao}>{resultado.mensagemResultado}</Text>
                <Text style={styles.nroImc}>{resultado.valorResultado}</Text>
                    <TouchableOpacity
                        style={styles.botaoShared}
                        onPress={onShare}
                    >
                        <Text style={styles.textShared}>Share</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}