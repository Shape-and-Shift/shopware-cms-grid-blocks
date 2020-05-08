import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-4-4-4',
    label: 'sas-cms-grid.blocks.grid.threeColumn.label',
    category: 'sas-grid',
    component: 'sw-cms-block-grid-4-4-4',
    previewComponent: 'sas-cms-grid-block-three-column-preview',
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
