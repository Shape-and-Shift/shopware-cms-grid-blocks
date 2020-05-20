import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-five-columns',
    label: 'sas-cms-grid.blocks.grid.fiveColumn.label',
    category: 'sas-grid',
    component: 'sw-cms-block-grid-five-columns',
    previewComponent: 'sw-cms-preview-grid-five-columns',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'col-1': 'text',
        'col-2': 'text',
        'col-3': 'text',
        'col-4': 'text',
        'col-5': 'text'
    }
});
