import React from 'react';
import BaseComponent from '../bases/BaseComponent';

class Dot extends BaseComponent {
  static propTypes = {
    number  : React.PropTypes.number.isRequired,
    onClick : React.PropTypes.func
  };

  static defaultProps = {
    number  : 1,
    onClick : () => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <img onClick={this.props.onClick} src={`/img/dot/${this.props.number}.png`} />;
  }
}

export default Dot;
