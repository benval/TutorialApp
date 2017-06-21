/**
 * This view is an example list of people.
 */
Ext.define('TutorialApp.view.main.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login-form',

    title: 'Login',
    frame:true,
    width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'User ID',
        name: 'user',
        emptyText: 'user id',
        msgTarget: 'under'
    }, {
        allowBlank: false,
        fieldLabel: 'Password',
        name: 'pass',
        emptyText: 'password',
        inputType: 'password'
    }, {
        xtype:'checkbox',
        fieldLabel: 'Remember me',
        name: 'remember'
    }],

    buttons: [
        { text:'Register' },
        { text:'Login' }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 120
    }
});
