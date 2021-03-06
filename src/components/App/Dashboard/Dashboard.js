import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Balances from './Balances';

import {
  ActionButton,
  BalanceAmount,
  BalanceContainer,
  ButtonRow,
  Container,
  CurrencySymbol,
  Gradient,
  Menu,
  MenuIcon,
  Title,
} from './styles';

class Dashboard extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,
    stopWatchPrices: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    usdBalance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    watchPrices: PropTypes.func.isRequired,
  };

  static defaultProps = {
    balanceAmount: 0,
  };

  componentDidMount() {
    this.props.watchPrices();
  }

  componentWillUnmount() {
    this.props.stopWatchPrices();
  }

  openReceiveScreen = () => this.props.navigation.navigate('AddFunds');

  openSendScreen = () => this.props.navigation.navigate('AmountForm');

  handleMenuButtonClick = () => this.props.navigation.openDrawer();

  render() {
    const { t, usdBalance } = this.props;

    return (
      <Container>
        <Gradient>
          <Menu onPress={this.handleMenuButtonClick}>
            <MenuIcon />
          </Menu>

          <Title>{t('dashboard.title')}</Title>

          <BalanceContainer>
            <CurrencySymbol>$</CurrencySymbol>
            <BalanceAmount>{usdBalance}</BalanceAmount>
          </BalanceContainer>
        </Gradient>

        <Balances />

        <ButtonRow>
          <ActionButton
            onPress={this.openReceiveScreen}
            square
            title={t('dashboard.receiveButton').toUpperCase()}
          />
          <ActionButton
            onPress={this.openSendScreen}
            square
            title={t('dashboard.sendButton').toUpperCase()}
          />
        </ButtonRow>
      </Container>
    );
  }
}

export default Dashboard;
