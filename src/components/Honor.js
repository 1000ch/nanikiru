import React from 'react';
import BaseComponent from '../bases/BaseComponent';

class Honor extends BaseComponent {
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
    return <img onClick={this.props.onClick} src={`/img/honor/${this.props.number}.png`} />;
  }
}

export default Honor;
