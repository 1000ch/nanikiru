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
      characters : [],
      dots       : [],
      bamboos    : [],
      honors     : []
    };
  }

  selectedCount() {
    return this.state.characters.length + this.state.dots.length + this.state.bamboos.length + this.state.honors.length;
  }

  onSelectedCharacterClick(number) {
    const characters = this.state.characters;
    characters.splice(characters.indexOf(number), 1);

    this.setState({
      characters: characters
    });
  }

  onSelectedDotClick(number) {
    const dots = this.state.dots;
    dots.splice(dots.indexOf(number), 1);

    this.setState({
      dots: dots
    });
  }

  onSelectedBambooClick(number) {
    const bamboos = this.state.bamboos;
    bamboos.splice(bamboos.indexOf(number), 1);

    this.setState({
      bamboos: bamboos
    });
  }

  onSelectedHonorClick(number) {
    const honors = this.state.honors;
    honors.splice(honors.indexOf(number), 1);

    this.setState({
      honors: honors
    });
  }

  onCharacterClick(number) {
    if (this.selectedCount() >= 14) {
      return;
    }

    const characters = this.state.characters;

    if (characters.filter(character => character === number).length >= 4) {
      return;
    }

    characters.push(number);

    this.setState({
      characters: characters.sort()
    });
  }

  onDotClick(number) {
    if (this.selectedCount() >= 14) {
      return;
    }

    const dots = this.state.dots;

    if (dots.filter(dot => dot === number).length >= 4) {
      return;
    }

    dots.push(number);

    this.setState({
      dots: dots.sort()
    });
  }

  onBambooClick(number) {
    if (this.selectedCount() >= 14) {
      return;
    }

    const bamboos = this.state.bamboos;

    if (bamboos.filter(bamboo => bamboo === number).length >= 4) {
      return;
    }

    bamboos.push(number);

    this.setState({
      bamboos: bamboos.sort()
    });
  }

  onHonorClick(number) {
    if (this.selectedCount() >= 14) {
      return;
    }

    const honors = this.state.honors;

    if (honors.filter(honor => honor === number).length >= 4) {
      return;
    }

    honors.push(number);

    this.setState({
      honors: honors.sort()
    });
  }

  renderSelectedCharacters() {
    return this.state.characters.map((n, i) => <Character onClick={this.onSelectedCharacterClick.bind(this, n)} key={i} number={n} />);
  }

  renderSelectedDots() {
    return this.state.dots.map((n, i) => <Dot onClick={this.onSelectedDotClick.bind(this, n)} key={i} number={n} />);
  }

  renderSelectedBamboos() {
    return this.state.bamboos.map((n, i) => <Bamboo onClick={this.onSelectedBambooClick.bind(this, n)} key={i} number={n} />);
  }

  renderSelectedHonors() {
    return this.state.honors.map((n, i) => <Honor onClick={this.onSelectedHonorClick.bind(this, n)} key={i} number={n} />);
  }

  renderCharacters() {
    return this.props.characters.map((n, i) => <Character onClick={this.onCharacterClick.bind(this, n)} key={i} number={n} />);
  }

  renderDots() {
    return this.props.dots.map((n, i) => <Dot onClick={this.onDotClick.bind(this, n)} key={i} number={n} />);
  }

  renderBamboos() {
    return this.props.bamboos.map((n, i) => <Bamboo onClick={this.onBambooClick.bind(this, n)} key={i} number={n} />);
  }

  renderHonors() {
    return this.props.honors.map((n, i) => <Honor onClick={this.onHonorClick.bind(this, n)} key={i} number={n} />);
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
