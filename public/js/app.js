var SelectedListView = React.createClass({
  render: function () {
    return React.createElement('ul', {}, this.props.items.map(function (item) {
      return React.createElement('li', {
        'data-kind': item.kind,
        'data-number': item.number,
        'data-order': item.order
      }, React.createElement('img', {
          src: item.src
      }));
    }));
  }
});

$(function () {
  
  var selected = document.querySelector('#selected');
  var $selected = $(selected);
  var $character = $('#character').find('li');
  var $bamboo = $('#bamboo').find('li');
  var $dot = $('#dot').find('li');
  var $honor = $('#honor').find('li');
  var $input = $('input');

  $selected.on('click', 'li', onSelectedClick);
  $character.on('click', onTileClick);
  $bamboo.on('click', onTileClick);
  $dot.on('click', onTileClick);
  $honor.on('click', onTileClick);

  var selectedList = [];

  function onSelectedClick(e) {

    var kind = this.getAttribute('data-kind');
    var number = this.getAttribute('data-number');

    selectedList.some(function (item, index, array) {
      if (kind === item.kind && number === item.number) {
        selectedList.splice(index, 1);
        return true;
      }
    });
  }

  function onTileClick(e) {

    if (selectedList.length === 14) {
      return;
    }
    
    var count = Number(this.getAttribute('data-count'));

    if (count === 0) {
      return;
    }

    this.setAttribute('data-count', --count);

    selectedList.push({
      kind: String(this.getAttribute('data-kind')),
      number: String(this.getAttribute('data-number')),
      order: Number(this.getAttribute('data-order')),
      src: String(this.querySelector('img').src)
    });

    selectedList.sort(function (a, b) {
      return a.order - b.order;
    });
  }
  
  Object.observe(selectedList, function (changes) {
    React.render(
      React.createElement(SelectedListView, {
        items: selectedList
      }),
      selected
    );

    var object = {};
    selectedList.forEach(function (item) {
      if (!object[item.kind]) {
        object[item.kind] = item.number;
      } else {
        object[item.kind] += item.number;
      }
    });

    var array = [];
    Object.keys(object).forEach(function (key) {
      array.push(key + '=' + object[key]);
    });

    $input.val(location.protocol + '//' + location.host + '?' + array.join('&'));
  });

  var query = location.search.replace('?', '');
  query.split('&').forEach(function (keyValue) {
    var kv = keyValue.split('=');
    if (kv.length === 2) {
      var kind = kv[0];
      var values = kv[1].split('');
      switch(kind) {
        case 'character':
          values.forEach(function (value) {
            $character.filter('[data-number=' + value + ']').click();
          });
          break;
        case 'dot':
          values.forEach(function (value) {
            $dot.filter('[data-number=' + value + ']').click();
          });
          break;
        case 'bamboo':
          values.forEach(function (value) {
            $bamboo.filter('[data-number=' + value + ']').click();
          });
          break;
        case 'honor':
          values.forEach(function (value) {
            $honor.filter('[data-number=' + value + ']').click();
          });
          break;
      }
    }
  })
});