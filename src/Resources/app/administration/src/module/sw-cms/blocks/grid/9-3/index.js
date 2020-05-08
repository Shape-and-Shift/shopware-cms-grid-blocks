import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-9-3',
    label: 'sas-cms-grid.blocks.grid.9-3.label',
    category: 'sas-grid',
    component: 'sw-cms-block-grid-9-3',
    previewComponent: 'sw-cms-preview-grid-9-3',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'col-1': 'text',
        'col-2': 'text'
    }
});
