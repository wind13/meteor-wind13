Stocks = new orion.collection('stocks', {
  singularName: 'stock', // The name of one of these items
  pluralName: 'stocks', // The name of more than one of these items
  link: {
    title: 'Stocks'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      { data: "code", title: "Code" }
    ]
  }
});

Stocks.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  code: {
    type: String
  }
}));