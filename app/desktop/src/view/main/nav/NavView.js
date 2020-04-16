Ext.define('allibilli.view.main.nav.NavView', {
    extend: 'Ext.Panel',
    xtype: 'navview',
    controller: "navviewcontroller",
    cls: 'navview',
    viewModel: {},
    layout: 'fit',
    tbar: {xtype: 'topview', height: 50},
    ddockedItems: [{
        xtype: 'button',
        itemId: 'btnToggleMenu',
        enableToggle: true,
        pressed: true,
        iconCls: 'x-fa fa-th-list',
        scale: 'small',
        width: '10%',
        dock: 'top',
        height: 38,
        listeners: {
            click: function(btn, e, eOpts) {
                
            }
        }
    }],
    items: [ 
        {
            xtype: 'menuview', 
            reference: 'menuview', 
            bind: {width: '{menuview_width}'}, 
            listeners: { 
                selectionchange: "onMenuViewSelectionChange"
            }
        }
    ],
    bbar: {xtype: 'bottomview', bind: {height: '{bottomview_height}'}}
});
