/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TutorialApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'TekstBasertNavn',

        loremIpsum: ' Vet ikke helt hva dette skal være godt for.',

        otherData: 'Litt mer åpenbart nå'
    }

    //TODO - add data, formulas and/or methods to support your view
});
