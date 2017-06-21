Ext.define('TutorialApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'TutorialApp.model.Personnel',

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", age: 121, gender: 'm' },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", age: 212, gender: 'm' },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", age: 222, gender: 'f' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", age: 232, gender: 'm' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
