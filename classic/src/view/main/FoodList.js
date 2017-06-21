/**
 * This view is an example list of people.
 */
Ext.define('TutorialApp.view.main.FoodList', {
    extend: 'Ext.grid.Panel',
    xtype: 'foodList',

    requires: [
        'TutorialApp.store.Food'
    ],

    title: 'Food',

    store: {
        type: 'food'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Age', dataIndex: 'age', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
