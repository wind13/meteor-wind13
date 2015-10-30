Transactions = new orion.collection('transactions', {
  singularName: 'transaction', // The name of one of these items
  pluralName: 'transactions', // The name of more than one of these items
  link: {
    title: 'Transactions'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "stock", title: "Stock" },
      { data: "price", title: "Price" },
      { data: "cost", title: "Cost" },
      { data: "quantity", title: "Quantity" },
      { data: "perCost()", title: "PerCost" },
      { data: "day", title: "Day"},
      orion.attributeColumn('createdAt', 'createdAt', 'Created At')
    ]
  }
});

Transactions.attachSchema(new SimpleSchema({
  stock: orion.attribute('hasOne', {
    label: 'Stock'
  }, {
    collection: Stocks,
    titleField: 'title',
    publicationName: 'Transaction of Stock.',
  }),
  price: {
    type: String
  },
  cost: {
    type: String
  },
  quantity: {
    type: Number
  },
  day: {
    type: Date
  },
  createdAt: orion.attribute('createdAt')
}));

Transactions.helpers({
  perCost: function(){
    var perCost = this.cost / this.quantity;
    return perCost;
  }
});