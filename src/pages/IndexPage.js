import React from 'react';
import { connectToStores } from 'fluxible-addons-react';
import BaseComponent from '../bases/BaseComponent';

class IndexPage extends BaseComponent {
  static contextTypes = {
    getStore      : React.PropTypes.func,
    executeAction : React.PropTypes.func
  };

  static propTypes = {
    categories : React.PropTypes.arrayOf(React.PropTypes.object),
    items      : React.PropTypes.arrayOf(React.PropTypes.object)
  };

  static defaultProps = {
    categories : [],
    items      : []
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="Container">
      </div>
    );
  }
}

IndexPage = connectToStores(IndexPage, [ItemStore], context => {
  return {
    items : context.getStore(ItemStore).getItems()
  };
});

export default IndexPage;
