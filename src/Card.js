import React, { Component } from 'react';
import './Card.scss';
import cardImg from './images/image-header-desktop.jpg';

class Card extends Component{
    render(){
        return(
            <div className='Card'>
                <div className='Card-text'>
                    <h3 className='Card-text__title'>Get <span>insights</span> that help your business grow.</h3>
                    <div className='Card-text-container'>
                        <p className='Card-text__sub'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                        <div className='Card-stats'>
                            <div>
                                <span className='stat-title'>10k+</span>
                                <span className='stat-sub'>companies</span>
                            </div>
                            <div>
                                <span className='stat-title'>314</span>
                                <span className='stat-sub'>templates</span>
                            </div>
                            <div>
                                <span className='stat-title'>12m+</span>
                                <span className='stat-sub'>queries</span>
                            </div>
                        </div>
                    </div>                
                </div>

                <div className='Card-imgContainer'>
                    <div className='imgCover'></div>
                </div>
            </div>
        );
    }
}

export default Card;