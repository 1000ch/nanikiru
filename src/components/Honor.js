import React from 'react';
import BaseComponent from '../bases/BaseComponent';

class Honor extends BaseComponent {
  static propTypes = {
    number : React.PropTypes.number.isRequired
  };

  static defaultProps = {
    number : 1
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <img src={`/img/honor/${this.props.number}.png`} />;
  }
}

export default Honor;
