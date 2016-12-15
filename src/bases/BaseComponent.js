import React from 'react';

class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.autoBind();
  }

  autoBind() {
    Object.getOwnPropertyNames(this.constructor.prototype)
      .filter(prop => typeof this[prop] === 'function')
      .forEach(method => {
        this[method] = this[method].bind(this);
      });
  }
}

export default BaseComponent;
