import React from 'react';
import './Rate.css';

class Rate extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        date: '',
        currencyRate: {}
    }
    this.currency = ['PHP', 'BRL', 'CAD', 'USD', 'ILS'];
    this.getRate();
  }
  getRate = () => {
      fetch('https://api.exchangeratesapi.io/latest')
      .then(data => {
          return data.json();
      })
      .then(data => {
          console.log(data.rates);
          this.setState({date: data.date});
          let result = {};
            for(let i = 0; i < this.currency.length; i++) {
                result[this.currency[i]] = data.rates[this.currency[i]];
                
            }
            console.log(result);
            this.setState({currencyRate: result});
      })
  }

  render() {
  return (
        <div className="rate">
            <h3> Курс валют на {this.state.date}</h3>
            <div className="flex-container">
                {Object.keys(this.state.currencyRate).map(elem => {
                    return (
                        <div className="block flex-item" key={elem}>
                            <div className="currency-name">{elem}</div>
                            <div className="currency-in">{this.state.currencyRate[elem].toFixed(2)}*</div>
                            <p>* Per 1 EUR</p>
                        </div>
                    )
                })}
            </div>
        </div>

        );
    }
}

export default Rate;
