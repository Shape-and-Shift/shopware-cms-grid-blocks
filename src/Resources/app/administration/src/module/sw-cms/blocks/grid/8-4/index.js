import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-8-4',
    label: 'sas-cms-grid.blocks.grid.8-4.label',
    category: 'sas-grid',
    component: 'sw-cms-block-grid-8-4',
    previewComponent: 'sw-cms-preview-grid-8-4',
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
