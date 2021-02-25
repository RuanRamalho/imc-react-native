import React from 'react';
import * as S from './style';
import { View, TouchableWithoutFeedback} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const Health = () => {
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
              keyboardType='number-pad'
            />
        </S.HealthInput>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Health;

