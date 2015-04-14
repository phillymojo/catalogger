
var pageData = {
  headerData: {text: "Tori's Beanie Boo Catalog", color: "Red"},
  contentData: {text: "Content"},
  itemData: {
    items: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {}
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


