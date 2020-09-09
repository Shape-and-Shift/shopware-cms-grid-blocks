import './extension/sw-cms/component/sw-cms-sidebar';

import './module/sw-cms/blocks/grid/12';
import './module/sw-cms/blocks/grid/6-6';
import './module/sw-cms/blocks/grid/4-4-4';
import './module/sw-cms/blocks/grid/3-3-3-3';
import './module/sw-cms/blocks/grid/five-columns';
import './module/sw-cms/blocks/grid/2-2-2-2-2-2';
import './module/sw-cms/blocks/grid/3-6-3';
import './module/sw-cms/blocks/grid/6-3-3';
import './module/sw-cms/blocks/grid/3-3-6';
import './module/sw-cms/blocks/grid/2-8-2';
import './module/sw-cms/blocks/grid/3-9';
import './module/sw-cms/blocks/grid/9-3';
import './module/sw-cms/blocks/grid/4-8';
import './module/sw-cms/blocks/grid/8-4';

import deDE from './module/sw-cms/snippet/de-DE.json';
import enGB from './module/sw-cms/snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);
