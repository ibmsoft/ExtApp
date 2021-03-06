﻿
Ext.define('App.store.dic.OpenType', {
    extend: 'Ext.data.Store',
    alias: 'store.opentypelist',
    storeId: 'opentypelist',

    model: 'App.model.core.Dic',

    proxy: {
        type: 'ajax',
        url: '/api/Dic/GetItems?code=OpenType',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        }
    },

    autoSync: true,
    autoLoad: true
});