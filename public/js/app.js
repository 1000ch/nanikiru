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
  
  var selectedTile = document.querySelector('#selected-tiles');
  var $selectedTiles = $(selectedTile);
  var $characterTiles = $('.character-tiles').find('li');
  var $bambooTiles = $('.bamboo-tiles').find('li');
  var $dotTiles = $('.dot-tiles').find('li');
  var $honorTiles = $('.honor-tiles').find('li');

  $selectedTiles.on('click', 'li', onSelectedClick);
  $characterTiles.on('click', onTileClick);
  $bambooTiles.on('click', onTileClick);
  $dotTiles.on('click', onTileClick);
  $honorTiles.on('click', onTileClick);

  var selectedList = [];

  function onSelectedClick(e) {
    var kind = String(this.getAttribute('data-kind'));
    var number = Number(this.getAttribute('data-number'));
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
    } else {
      this.setAttribute('data-count', --count);
    }

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
      selectedTile
    );
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
            $characterTiles.filter('[data-number=' + value + ']').click();
          });
          break;
        case 'dot':
          values.forEach(function (value) {
            $dotTiles.filter('[data-number=' + value + ']').click();
          });
          break;
        case 'bamboo':
          values.forEach(function (value) {
            $bambooTiles.filter('[data-number=' + value + ']').click();
          });
          break;
        case 'honor':
          values.forEach(function (value) {
            $honorTiles.filter('[data-number=' + value + ']').click();
          });
          break;
      }
    }
  })
});