import React, {Component} from 'react';
import CoinContainer from './CoinContainer';
import './Coin.css'



class Coin extends Component {


    render() {
        return (
            <div className='Coin'>
                <img src={this.props.info.imgSrc} alt={this.props.info.side}/>
            </div>
        )
    };
};

export default Coin;