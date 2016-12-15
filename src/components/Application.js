import React from 'react';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';
import BaseComponent from '../bases/BaseComponent';
import ApplicationStore from '../stores/ApplicationStore';

class Application extends BaseComponent {
  static contextTypes = {
    getStore      : React.PropTypes.func,
    executeAction : React.PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pageTitle === prevProps.pageTitle) {
      return;
    }

    document.title = this.props.pageTitle;
  }

  render() {
    const Handler = this.props.currentRoute.handler;

    return (
      <div>
        <Handler />
      </div>
    );
  }
}

Application = connectToStores(Application, [ApplicationStore], context => {
  return context.getStore(ApplicationStore).getState();
});

Application = handleHistory(Application);
Application = provideContext(Application);

export default Application;
