
var pageData = {
  headerData: {text: "Tori's Beanie Boo Catalog", color: "Red"},
  contentData: {text: "Content"}
}
React.render(
  React.createElement(PageContent, {pageData: pageData}),
  document.getElementById('page_home')
);


