import React from 'react';
import { connectToStores } from 'fluxible-addons-react';
import BaseComponent from '../bases/BaseComponent';
import Character from '../components/Character';
import Dot from '../components/Dot';
import Bamboo from '../components/Bamboo';
import Honor from '../components/Honor';
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

  renderCharacters() {
    return this.props.characters.map(n => <Character key={n} number={n} />);
  }

  renderDots() {
    return this.props.dots.map(n => <Dot key={n} number={n} />);
  }

  renderBamboos() {
    return this.props.bamboos.map(n => <Bamboo key={n} number={n} />);
  }

  renderHonors() {
    return this.props.honors.map(n => <Honor key={n} number={n} />);
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column centered">
            {this.renderCharacters()}
          </div>
        </div>
        <div className="columns">
          <div className="column centered">
            {this.renderDots()}
          </div>
        </div>
        <div className="columns">
          <div className="column centered">
            {this.renderBamboos()}
          </div>
        </div>
        <div className="columns">
          <div className="column centered">
            {this.renderHonors()}
          </div>
        </div>
      </div>
    );
  }
}

IndexPage = connectToStores(IndexPage, [MahjongStore], context => {
  return {
    characters : context.getStore(MahjongStore).getCharacters().characters,
    dots : context.getStore(MahjongStore).getDots().dots,
    bamboos : context.getStore(MahjongStore).getBamboos().bamboos,
    honors : context.getStore(MahjongStore).getHonors().honors
  };
});

export default IndexPage;
