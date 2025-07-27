import React from 'react';
import './PricingPlans.scss';
import PlanCard from './PlanCard';

const PricingPlans = () => {
  const plans = [
    {
      name: 'X',
      price: 'FREE',
      features: [
        { text: 'Add -free', included: false },
        { text: 'HD | download', included: false },
        { text: 'X Badge', included: true },
      ],
      isFeatured: false,
    },
    {
      name: 'Y',
      price: '$9.99/mon',
      features: [
        { text: 'Add -free', included: true },
        { text: 'HD | download', included: true },
        { text: 'Y Badge', included: true },
        { text: '25% off on referring', included: true },
      ],
      isFeatured: true,
    },
    {
      name: 'Z',
      price: '$12.99/mon',
      features: [
        { text: 'Add -free', included: true },
        { text: 'HD | download', included: true },
        { text: 'Z Badge', included: true },
        { text: '25% off on referring', included: true },
        { text: 'Access to libraries', included: true },
      ],
      isFeatured: false,
    },
  ];

  return (
    <div className="pricing-section">
      <h2>Choose Your Plan</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
