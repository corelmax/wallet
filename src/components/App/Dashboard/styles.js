import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from 'components/shared/Button';

import {
  colors,
  fonts,
  helpers,
  HeaderGradient,
} from 'components/shared/Styleguide';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgLight};
`;

export const Gradient = styled(HeaderGradient)`
  ${helpers.centerContentFlex};
  display: flex;
  height: 163;
  width: ${helpers.vw};
`;

export const Menu = styled.TouchableOpacity`
  position: absolute;
  left: 16;
  top: 16;
`;

export const MenuIcon = styled(Icon).attrs({
  name: 'menu',
})`
  color: white;
  font-size: 26;
`;

export const Title = styled.Text`
  color: ${colors.darkBlue};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: 14;
  margin-bottom: 16;
`;

export const BalanceContainer = styled.View`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CurrencySymbol = styled.Text`
  color: ${colors.textWhite};
  font-family: ${fonts.roboto.regular};
  font-size: 28;
  margin-right: 2;
`;

export const BalanceAmount = styled.Text`
  color: ${colors.textWhite};
  font-family: ${fonts.roboto.regular};
  font-size: 54;
  line-height: 54;
`;

export const ButtonRow = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled(Button).attrs({
  square: true,
})`
  flex-grow: 1;
  margin-bottom: 0;
  margin-top: 0;
`;
