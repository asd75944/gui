/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import Loading from '../packages/loading/index.js';
import locale from 'g-ui/src/locale';
import CollapseTransition from 'g-ui/src/transitions/collapse-transition';

console.log('master 1')



console.log('master 2')
console.log('dev1')

const components = [
  Button,
  CollapseTransition
];

console.log('master 4')

const install = function(Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  // Vue.use(InfiniteScroll);
  // Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  CollapseTransition,
  // Loading,
  Button
};
