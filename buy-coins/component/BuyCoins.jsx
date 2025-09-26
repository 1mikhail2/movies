import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadStripe } from '@stripe/stripe-js';
import STRIPE_KEY from '../../../constants/stripe_key';
import { Elements } from '@stripe/react-stripe-js';

import PageComponent from '../../../components/page-components/page-component';
import PageWithSuccessMessage from '../../../components/page-components/page-with-success-message';
import Icon from '../../../components/icon';
import OpportunityItem from '../../../components/opportunity-item';
import BuyCoinsForm from '../../../components/forms/buy-coins-form';
import PaymentItem from '../../../components/payment-item';
import Footer from '../../../components/footer';

import coinIcon from '../../../../assets/icons/coin_2.svg';
import lowPriceImage from '../../../../assets/images/low-price.png';
import pendingImage from '../../../../assets/images/pending.png';
import salesImage from '../../../../assets/images/sales.png';
import mastercardIcon from '../../../../assets/icons/mastercard.svg';
import visaIcon from '../../../../assets/icons/visa.svg';
import unionpayIcon from '../../../../assets/icons/unionpay.svg';

import './buy-coins.scss';

const stripePromise = loadStripe(STRIPE_KEY.TEST);

const BuyCoins = (props) => {
  const {
    className,
    successSending,
    onAddCoins,
    userId
  } = props;

  return (
    <Elements stripe={stripePromise}>
      <PageWithSuccessMessage
        successSending={successSending}
        message="Submit successfully"
      >
        <PageComponent
          className={classNames("buy-coins", className)}
          title="Buy coins"
        >
          <div className="buy-coins__opportunities">
            <OpportunityItem
              src={lowPriceImage}
              alt="Low prices"
              title="Low prices"
              text="Don't spend too much money. It's very cheap."
            />
            <OpportunityItem
              src={pendingImage}
              alt="Pending"
              title="Pending"
              text="So fast. Maybe..."
            />
            <OpportunityItem
              src={salesImage}
              alt="Sales"
              title="Sales"
              text="Can buy some cool subjects on our platform."
            />
          </div>
          <div className="buy-coins__container">
            <div className="buy-coins__title-item">
              <Icon
                className="buy-coins__title-item-icon"
                glyph={coinIcon.id}
                viewBox={coinIcon.viewBox}
              />
              <div className="buy-coins__info">
                <h3>Movie coins</h3>
                <div className="buy-coins__exchange">
                  <div className="buy-coins__coins-count">
                    <p>30</p>
                    <Icon
                      glyph={coinIcon.id}
                      viewBox={coinIcon.viewBox}
                    />
                  </div>
                  <p>/</p>
                  <p className="buy-coins__real-money">3$</p>
                </div>
              </div>
            </div>
            <div className="buy-coins__right-side">
              <BuyCoinsForm
                className="buy-coins__form"
                onAddCoins={onAddCoins}
                userId={userId}
              />
              <div className="buy-coins__payment">
                <PaymentItem
                  glyph={mastercardIcon.id}
                  viewBox={mastercardIcon.viewBox}
                />
                <PaymentItem
                  glyph={visaIcon.id}
                  viewBox={visaIcon.viewBox}
                />
                <PaymentItem
                  glyph={unionpayIcon.id}
                  viewBox={unionpayIcon.viewBox}
                />
              </div>
            </div>
          </div>
        </PageComponent>
        <Footer />
      </PageWithSuccessMessage>
    </Elements>
  );
};

export default BuyCoins;