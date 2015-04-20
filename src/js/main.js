
var pageData = {
  headerData: {text: "Tori's Beanie Boo Catalog", color: "Red"},
  contentData: {text: "Content"},
  itemData: {
    items: {
      1: {name: 'Tori'},
      2: {name: 'Rocky'},
      3: {name: 'Squaggle'},
      4: {name: 'Chicken'},
      5: {name: 'Butt'},
      6: {name: 'Cooper'}
    },
    nextitem: {
      data: 'April 16',
      item: {}
    }
  }
}
React.render(
  React.createElement(PageContent, {pageData: pageData}),
  document.getElementById('page_home')
);


