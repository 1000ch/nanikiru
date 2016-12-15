import BaseStore from 'fluxible/addons/BaseStore';
import RouteStore from './RouteStore';

class MahjongStore extends BaseStore {
  static storeName = 'MahjongStore';

  constructor(dispatcher) {
    super(dispatcher);
    this.characters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.dots = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.bamboos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.honors = [1, 2, 3, 4, 5, 6, 7];
  }

  getCharacters() {
    return {
      characters : this.characters
    };
  }

  getDots() {
    return {
      dots : this.dots
    };
  }

  getBamboos() {
    return {
      bamboos : this.bamboos
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
      dots : this.dots,
      bamboos : this.bamboos,
      honors : this.honors
    };
  }

  rehydrate(state) {
    this.characters = state.characters;
    this.dots = state.dots;
    this.bamboos = state.bamboos;
    this.honors = state.honors;
  }
}

export default MahjongStore;
