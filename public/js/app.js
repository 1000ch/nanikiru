var SelectedListView = React.createClass({
  render: function () {
    return React.createElement('ul', {}, this.props.items.map(function (item) {
      return React.createElement('li', {
        'data-kind': item.kind,
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
  $honorTiles.on('click', onTileClick)

  var selectedList = [];

  function onSelectedClick(e) {
    var kind = this.getAttribute('data-kind');
    selectedList.some(function (item, index, array) {
      if (kind === item.kind) {
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
      order: Number(this.getAttribute('data-order')),
      src: String(this.querySelector('img').src)
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
});