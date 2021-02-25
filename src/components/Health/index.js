import React, {useEffect, useState} from 'react';
import * as S from './style';
import { View, TouchableWithoutFeedback} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const Health = () => {
    const [weight, setWeight] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [imc, setImc] = React.useState(0);
    const [water, setWater] = React.useState(0);
    const [cups, setCups] = React.useState(0);
    const [imcDescription, setImcDescription] = React.useState('');
  
    const imcDescriptionMessage = {
      low: 'abaixo do peso, cuidado. ',
      normal: 'com o peso normal, parabéns. ',
      warning: 'com sobrepeso, atenção. ',
      fat: 'na obesidade grau 1, cuidado. ',
      fatter: 'na obesidade grau 2, cuidado. ',
      bigFat: 'na obesidade grau 3, cuidado. ',
    };
  
    useEffect(() => {
      if (weight.value && height.value) {
        const weightNumber = Number(weight.value.replace(',', '.'));
        const heightNumber = Number(height.value.replace(',', '.'));
  
        let calcImc = weightNumber / (heightNumber * heightNumber);
  
        if (calcImc && calcImc !== Infinity) {
          calcImc = calcImc.toFixed(2);
          setImc(calcImc);
          if (calcImc < 18.5) {
            setImcDescription(imcDescriptionMessage.low);
          } else if (calcImc < 24.9) {
            setImcDescription(imcDescriptionMessage.normal);
          } else if (calcImc < 29.9) {
            setImcDescription(imcDescriptionMessage.warning);
          } else if (calcImc < 34.9) {
            setImcDescription(imcDescriptionMessage.fat);
          } else if (calcImc < 39.9) {
            setImcDescription(imcDescriptionMessage.fatter);
          } else {
            setImcDescription(imcDescriptionMessage.bigFat);
          }
        } else {
          setImc(0);
        }
      } else {
        setImc(0);
      }
    }, [weight, height]);
  
    useEffect(() => {
      let calWater = weight.value * 0.035;
      let calCups = calWater / 0.3;
      if (calWater) {
        setWater(calWater.toPrecision(3));
        setCups(calCups.toFixed(0));
      }
    }, [weight]);
    
  return (
    <TouchableWithoutFeedback>
      <View>
        <S.HealthTitle>Saúde+</S.HealthTitle>
        <S.HealthLabel>Peso</S.HealthLabel>
        <S.HealthInput> 
            <TextInputMask 
            type={'custom'}
            options={{
              mask: '99,999',
            }}
            value={weight.value}
            onChangeText={(weightInput) => {
              setWeight({
                value: weightInput,
              });
            }}
            keyboardType='number-pad'
            autoFocus={true}
            />
            </S.HealthInput>

        <S.HealthLabel>Altura</S.HealthLabel>
        <S.HealthInput>
        <TextInputMask
            type={'custom'}
            options={{
              mask: '9,99',
            }}
            value={height.value}
            onChangeText={(heightInput) => {
              setHeight({
                value: heightInput,
              });
            }}
            keyboardType='number-pad'
            />
        </S.HealthInput>

        {imc !== 0 ? (
          <View>
            <S.HealthAdvice>
              O seu IMC é de {imc.toString().replace('.',',' )}kg
              e por isso você está {imcDescription} 
              Você deveria tomar {water.toString().replace('.',',' )}L
              de água diariamente. O que corresponde a
              { cups.toString().replace('.', ',')} copos de 300ml por dia
              </S.HealthAdvice>
          </View> 
          ) : (
              <View></View>
            )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Health;

