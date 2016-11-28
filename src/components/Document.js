import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';
import BaseComponent from '../bases/BaseComponent';

class Document extends BaseComponent {
  static propTypes = {
    context : React.PropTypes.object,
    html    : React.PropTypes.string,
    state   : React.PropTypes.string
  };

  static contextTypes = {
    getStore      : React.PropTypes.func,
    executeAction : React.PropTypes.func
  };

  static defaultProps = {
    context : {},
    html    : '',
    state   : ''
  };

  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.context.getStore(ApplicationStore).getState().pageTitle;
    const content = { __html : this.props.html };
    const script = { __html : this.props.state };

    return (
      <html lang>
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={content}></div>
          <script dangerouslySetInnerHTML={script}></script>
          <script src="/js/app.js"></script>
        </body>
      </html>
    );
  }
}

export default Document;
