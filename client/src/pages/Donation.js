import React, { useEffect } from "react";
import { QUERY_CHECKOUT } from '../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/react-hooks';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Donation = () => {
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
          stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
          });
        }
    }, [data]);

    async function handleDonate(name) {
        getCheckout({
            variables: { name }
        });
    }

    return(
        <div className='global-wrapper'>
            <div className='donation-page'>
                <div className='donation-header pattern-diagonal-stripes-left'>
                    <h3>
                        We appreciate your support!
                    </h3>
                    <p>
                        We believe that colors and palettes should be shareable just like code is!
                        <br /><br />
                        Color Theory was created to allow developers, designers, illustrators, and engineers a place to create community build around the need and want to share color. Whether that be for your art or your app. <br /><br/>
                        Your donations allow us to continue maintaining this wonderful website.<br />
                        Without you we couldn't do it!
                    </p>
                </div>
                <div className='donation-body'>
                    <h4>Donation Tiers</h4>
                    <p>Select an option below to chekout with a one time donation of the selected amount.</p>
                    <div>
                        <div 
                            onClick={() => handleDonate('Bronze')}
                            className='donation-options-wrapper'>
                            <div className='tier-emblem bronze'>
                                <h5>Bronze</h5>
                                <div>
                                    $10
                                </div>
                            </div>
                        </div>
                        <div 
                            onClick={() => handleDonate('Silver')}
                            className='tier-emblem silver'>
                            <h5>Silver</h5>
                            <div >
                                $20
                            </div>
                        </div>
                        <div 
                            onClick={() => handleDonate('Gold')}
                            className='tier-emblem gold'>
                            <h5>Gold</h5>
                            <div >
                                $50
                            </div>
                        </div>
                        <div 
                            onClick={() => handleDonate('Platinum')}
                            className='tier-emblem platinum'>
                            <h5>Platinum</h5>
                            <div >
                                $100
                            </div>
                        </div>
                        <div 
                            onClick={() => handleDonate('Diamond')}
                            className='tier-emblem diamond'>
                            <h5>Diamond</h5>
                            <div >
                                $200
                            </div>
                        </div>
                        <div 
                            onClick={() => handleDonate('Immortal')}
                            className='tier-emblem immortal'>
                            <h5>Immortal</h5>
                            <div >
                                $500
                            </div>
                        </div>
                    </div>
                    <p>
                        Every penny supports the creators in continuing to make this website wonderful!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Donation;