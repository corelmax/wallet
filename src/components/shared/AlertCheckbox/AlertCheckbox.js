import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'react-native-check-box';

import { colors } from 'components/shared/Styleguide';

import { Container, Label } from './styles';

class AlertCheckbox extends Component {
  static propTypes = {
    isChecked: PropTypes.bool,
    label: PropTypes.string.isRequired,

    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isChecked: false,
  };

  render() {
    const { isChecked, label, onPress } = this.props;

    return (
      <Container>
        <CheckBox
          checkBoxColor={colors.textPrimary}
          isChecked={isChecked}
          onClick={() => onPress()}
        />
        <Label>{label}</Label>
      </Container>
    );
  }
}

export default AlertCheckbox;
