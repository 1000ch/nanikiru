import React from 'react';
import { connectToStores } from 'fluxible-addons-react';
import BaseComponent from '../bases/BaseComponent';
import MahjongStore from '../stores/MahjongStore';

class IndexPage extends BaseComponent {
  static contextTypes = {
    getStore      : React.PropTypes.func,
    executeAction : React.PropTypes.func
  };

  static propTypes = {
    characters : React.PropTypes.array,
    bamboos: React.PropTypes.array,
    dots: React.PropTypes.array,
    honors: React.PropTypes.array
  };

  static defaultProps = {
    characters : [],
    bamboos : [],
    dots : [],
    honors : []
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

IndexPage = connectToStores(IndexPage, [MahjongStore], context => {
  return {
    characters : context.getStore(MahjongStore).getCharacters().characters,
    bamboos : context.getStore(MahjongStore).getBamboos().bamboos,
    dots : context.getStore(MahjongStore).getDots().dots,
    honors : context.getStore(MahjongStore).getHonors().honors
  };
});

export default IndexPage;
