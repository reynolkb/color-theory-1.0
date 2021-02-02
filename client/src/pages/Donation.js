import React from 'react';

const Donation = () => {

    return(
        <div className='global-wrapper'>
            <div className='donation-page'>
                <div className='donation-header'>
                    <h3>
                        We appreciate your support!
                    </h3>
                    <p>
                        We believe that colors and palettes should be open to share just like code is!<br />
                        Color Theory was created to allow developers, designers, illustrators, and engineers a place to create community build around the need and want to share color. Whether that be for your art or your app. <br />
                        Your donations allow us to continue maintaining this wonderful website.<br />
                        Without you we couldn't do it!
                    </p>
                </div>
                <div className='donation-body pattern-diagonal-stripes-left'>
                    <h4>Donation Tiers</h4>
                    <p>All donations are one time.</p>
                    <div className='donation-options-wrapper'>
                        <div className='tier-emblem'>
                            <h5>Bronze</h5>
                            <div>
                                $10
                            </div>
                        </div>
                        <div className='tier-emblem'>
                            <h5>Silver</h5>
                            <div>
                                $20
                            </div>
                        </div>
                        <div className='tier-emblem'>
                            <h5>Gold</h5>
                            <div>
                                $50
                            </div>
                        </div>
                        <div className='tier-emblem'>
                            <h5>Platinum</h5>
                            <div>
                                $100
                            </div>
                        </div>
                        <div className='tier-emblem'>
                            <h5>Diamond</h5>
                            <div>
                                $200
                            </div>
                        </div>
                        <div className='tier-emblem'>
                            <h5>Immortal</h5>
                            <div>
                                $500
                            </div>
                        </div>
                    </div>
                    <p>
                        We appreciate your donations!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Donation;