Ext.define('TutorialApp.store.Food', {
    extend: 'Ext.data.Store',

    alias: 'store.food',

    model: 'TutorialApp.model.Food',

    data: { items: [
        { name: 'Pork', age: 1},
        { name: 'Ham', age: 2},
        { name: 'Salomon', age: 3},
        { name: 'Salad', age: 4}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
