import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-12',
    label: 'sas-cms-grid.blocks.grid.oneColumn.label',
    category: 'sas-grid',
    component: 'sw-cms-block-grid-12',
    previewComponent: 'sw-cms-preview-grid-12',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'col-1': 'text'
    }
});
