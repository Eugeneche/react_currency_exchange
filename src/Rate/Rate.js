import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc'

class Rate extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        date: '',
        currencyRate: {},
    }
        this.myCurrency = ['ILS', 'PHP', 'JPY', 'NOK'];
        this.getRate();
  }

    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({date: data.date});
                let result = {};
                for(let i = 0; i < this.myCurrency.length; i++) {
                    result[this.myCurrency[i]] = data.rates[this.myCurrency[i]];
                    }
                this.setState({currencyRate: result});
                }
            );
    }

  render() {
  return (
        <div className="rate">
            <h3 className="header-date">Exchange rates on {this.state.date}</h3>
            <div className="flex-container">
                {Object.keys(this.state.currencyRate).map(currency => {
                    return (
                        <div className="block flex-item" key={currency}>
                            <div className="currency-name">{currency}</div>
                            <div className="currency-in">{this.state.currencyRate[currency]}</div>
                            <p>* Per 1 EUR</p>
                        </div>
                    )
                })}                       
            </div>
            <Calc rate={this.state.currencyRate}/>
        </div>

        );
    }
}

export default Rate;
