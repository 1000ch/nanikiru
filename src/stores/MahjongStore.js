import BaseStore from 'fluxible/addons/BaseStore';
import RouteStore from './RouteStore';

class MahjongStore extends BaseStore {
  static storeName = 'MahjongStore';

  constructor(dispatcher) {
    super(dispatcher);
    this.characters = [];
    this.bamboos = [];
    this.dots = [];
    this.honors = [];
  }

  getCharacters() {
    return {
      characters : this.characters
    };
  }

  getBamboos() {
    return {
      bamboos : this.bamboos
    };
  }

  getDots() {
    return {
      dots : this.dots
    };
  }

  getHonors() {
    return {
      honors : this.honors
    };
  }

  dehydrate() {
    return {
      characters : this.characters,
      bamboos : this.bamboos,
      dots : this.dots,
      honors : this.honors
    };
  }

  rehydrate(state) {
    this.characters = state.characters;
    this.bamboos = state.bamboos;
    this.dots = state.dots;
    this.honors = state.honors;
  }
}

export default MahjongStore;
