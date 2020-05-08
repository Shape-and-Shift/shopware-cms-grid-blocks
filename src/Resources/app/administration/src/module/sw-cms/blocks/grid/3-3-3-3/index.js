import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-3-3-3-3',
    label: 'sas-cms-grid.blocks.grid.fourColumn.label',
    category: 'sas-grid',
    component: 'sw-cms-block-grid-3-3-3-3',
    previewComponent: 'sas-cms-grid-block-four-column-preview',
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
        'col-4': 'text'
    }
});
