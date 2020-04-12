import React from 'react';
import './Calc.css';

class Calc extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        result: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
      return {rate: props.rate}
  }

  calcRates = (event) => {
      event.preventDefault();
      let formElements = event.target.elements;
      let amountToChange = formElements["amount-to-change"].value;
      let typeCurrency = formElements["type-currency"].value;
      this.setState({
         result: (amountToChange / this.state.rate[typeCurrency]).toFixed(2)
      })
  }

  render() {
  return (
        <div className="calculator">
                <h3>Currency Converter</h3>
                <div className="block">
                    <div>Amount</div>                  
                    <div>
                        <form onSubmit={this.calcRates}>
                            <input type="number" defaultValue="0" name="amount-to-change" />
                            <select name="type-currency" id="">
                                {Object.keys(this.props.rate).map(currency => {
                                    return (
                                    <option key={currency}>{currency}</option>
                                    )
                                })}
                            </select>
                            <input type="submit" />
                        </form>
                    </div>
                    
                    <div>
                        <h4>Exchange Result</h4>
                        <ul className="calc-res">
                            <li>EUR {this.state.result}</li>
                        </ul>
                    </div>
                </div>
        </div>

        );
    }
}

export default Calc;
