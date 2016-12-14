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
    bamboos    : React.PropTypes.array,
    dots       : React.PropTypes.array,
    honors     : React.PropTypes.array
  };

  static defaultProps = {
    characters : [],
    bamboos    : [],
    dots       : [],
    honors     : []
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      characters : [1, 2, 3],
      dots       : [1, 1, 2, 2, 3, 3],
      bamboos    : [1, 2, 3],
      honors     : []
    };
  }

  selectedCount() {
    return this.state.characters.length + this.state.dots.length + this.state.bamboos.length + this.state.honors.length;
  }

  onCharacterClick(e) {
    if (this.selectedCount() >= 14) {
      return;
    }

    console.log(e);
  }

  onDotClick(e) {
    if (this.selectedCount() >= 14) {
      return;
    }

    console.log(e);
  }

  onBambooClick(e) {
    if (this.selectedCount() >= 14) {
      return;
    }

    console.log(e);
  }

  onHonorClick(e) {
    if (this.selectedCount() >= 14) {
      return;
    }

    console.log(e);
  }

  renderSelectedCharacters() {
    return this.state.characters.map((n, i) => <Character key={i} number={n} />);
  }

  renderSelectedDots() {
    return this.state.dots.map((n, i) => <Dot key={i} number={n} />);
  }

  renderSelectedBamboos() {
    return this.state.bamboos.map((n, i) => <Bamboo key={i} number={n} />);
  }

  renderSelectedHonors() {
    return this.state.honors.map((n, i) => <Honor key={i} number={n} />);
  }

  renderCharacters() {
    return this.props.characters.map((n, i) => <Character onClick={this.onCharacterClick} key={i} number={n} />);
  }

  renderDots() {
    return this.props.dots.map((n, i) => <Dot onClick={this.onDotClick} key={i} number={n} />);
  }

  renderBamboos() {
    return this.props.bamboos.map((n, i) => <Bamboo onClick={this.onBambooClick} key={i} number={n} />);
  }

  renderHonors() {
    return this.props.honors.map((n, i) => <Honor onClick={this.onHonorClick} key={i} number={n} />);
  }

  render() {
    return (
      <div className="Container">
        <div className="Row">
          {this.renderSelectedCharacters()}
          {this.renderSelectedDots()}
          {this.renderSelectedBamboos()}
          {this.renderSelectedHonors()}
        </div>
        <div className="Row">
          {this.renderCharacters()}
        </div>
        <div className="Row">
          {this.renderDots()}
        </div>
        <div className="Row">
          {this.renderBamboos()}
        </div>
        <div className="Row">
          {this.renderHonors()}
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
