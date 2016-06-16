const SelectedListView = React.createClass({
  render: function() {
    return React.createElement('ul', {}, this.props.items.map(item => {
      return React.createElement('li', {
        'data-kind'   : item.kind,
        'data-number' : item.number,
        'data-order'  : item.order
      }, React.createElement('img', {
          src : item.src
      }));
    }));
  }
});

$(() => {
  const selected = document.querySelector('#selected');
  const $selected = $(selected);
  const $character = $('#character').find('li');
  const $bamboo = $('#bamboo').find('li');
  const $dot = $('#dot').find('li');
  const $honor = $('#honor').find('li');
  const $input = $('input');

  $selected.on('click', 'li', onSelectedClick);
  $character.on('click', onTileClick);
  $bamboo.on('click', onTileClick);
  $dot.on('click', onTileClick);
  $honor.on('click', onTileClick);

  function renderItems(items) {
    ReactDOM.render(
      React.createElement(SelectedListView, {
        items : selectedList.sort((a, b) => a.order - b.order)
      }),
      selected
    );

    const object = {};
    selectedList.forEach(item => {
      if (!object[item.kind]) {
        object[item.kind] = item.number;
      } else {
        object[item.kind] += item.number;
      }
    });

    const array = [];
    Object.keys(object).forEach(key => {
      array.push(`${key}=${object[key]}`);
    });

    $input.val(`${location.protocol}//${location.host}?${array.join('&')}`);
  }

  const selectedList = [];

  function onSelectedClick(e) {
    const kind = this.getAttribute('data-kind');
    const number = this.getAttribute('data-number');

    selectedList.some((item, index, array) => {
      if (kind === item.kind && number === item.number) {
        selectedList.splice(index, 1);
        return true;
      }
    });

    renderItems(selectedList);
  }

  function onTileClick(e) {
    if (selectedList.length === 14) {
      return;
    }

    let count = Number(this.getAttribute('data-count'));

    if (count === 0) {
      return;
    }

    this.setAttribute('data-count', --count);

    selectedList.push({
      kind   : String(this.getAttribute('data-kind')),
      number : String(this.getAttribute('data-number')),
      order  : Number(this.getAttribute('data-order')),
      src    : String(this.querySelector('img').src)
    });

    renderItems(selectedList);
  }

  const query = location.search.replace('?', '');
  query.split('&').forEach(keyValue => {
    const kv = keyValue.split('=');
    if (kv.length === 2) {
      const kind = kv[0];
      const values = kv[1].split('');
      switch(kind) {
        case 'character':
          values.forEach(value => {
            $character.filter(`[data-number=${value}]`).click();
          });
          break;
        case 'dot':
          values.forEach(value => {
            $dot.filter(`[data-number=${value}]`).click();
          });
          break;
        case 'bamboo':
          values.forEach(value => {
            $bamboo.filter(`[data-number=${value}]`).click();
          });
          break;
        case 'honor':
          values.forEach(value => {
            $honor.filter(`[data-number=${value}]`).click();
          });
          break;
      }
    }
  })
});
