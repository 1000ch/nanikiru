import BaseStore from 'fluxible/addons/BaseStore';
import RouteStore from './RouteStore';

class ApplicationStore extends BaseStore {
  static storeName = 'ApplicationStore';

  static handlers = {
    'NAVIGATE_SUCCESS' : 'handlePageTitle'
  };

  constructor(dispatcher) {
    super(dispatcher);
    this.pageTitle = '';
  }

  handlePageTitle(currentRoute) {
    this.dispatcher.waitFor(RouteStore, () => {
      if (currentRoute && currentRoute.title) {
        this.pageTitle = currentRoute.title;
        this.emitChange();
      }
    });
  }

  getState() {
    return {
      pageTitle : this.pageTitle
    };
  }

  dehydrate() {
    return {
      pageTitle : this.pageTitle
    };
  }

  rehydrate(state) {
    this.pageTitle = state.pageTitle;
  }
}

export default ApplicationStore;
