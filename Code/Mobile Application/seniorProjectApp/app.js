/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'FotoZap',

    requires: [
        'Ext.MessageBox'
        
    ],
    views:[
        'CampaignList',
        'Main',
        'Cast',
        'CastModal',
        'CampaignPage',
        'dropDownPanel',
        'disconnectChromecast',
        'customListItem',
        'playPauseView'
    ],
    models:[
        'Campaign',
        'User'
    ],
    stores:[
        'StoreCampaign',
        'UsersStore'
    ],
    controllers:['Main','Cast','CampaignListController'],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        //console.log(Ext.getStore('theUsers'));
        //var user = Ext.create('FotoZap.model.User',{
         //   username:'snoel006@fiu.edu',
        //    password:'fotozap',
        //    storeId:'theUsers'
        //});
    //localStorage.setItem("u","snoel006@fiu.edu");
    //localStorage.setItem("p","fotozap");
       //Ext.getStore('theUsers').load();
        //Ext.getStore('theUsers').sync();
       setTimeout(function() {
        navigator.splashscreen.hide();
    }, 5000);
        // Initialize the main view
        this.setupLifeCycleEvents();
        Ext.Viewport.add(Ext.create('FotoZap.view.Main'));
    },
    setupLifeCycleEvents:function(){
        document.addEventListener("deviceready",function(){
            document.addEventListener("pause",function(){
                setTimeout(function() {
                FotoZap.app.getController('CampaignListController').onPause();
        }, 5000);
                
            });
        });
    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
