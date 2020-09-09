import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-6-3-3',
    label: 'sas-cms-grid.blocks.grid.6-3-3.label',
    category: 'sas-grid',
    component: 'sw-cms-block-grid-6-3-3',
    previewComponent: 'sas-cms-grid-block-6-3-3-column-preview',
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
        'col-3': 'text'
    }
});
