import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'grid-2-2-2-2-2-2',
    label: 'sas-cms-grid.blocks.grid.sixColumn.label',
    category: 'sas-grid',
    component: 'sw-cms-block-grid-2-2-2-2-2-2',
    previewComponent: 'sas-cms-grid-block-six-column-preview',
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
        'col-5': 'text',
        'col-6': 'text'
    }
});
