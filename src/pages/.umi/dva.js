import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'global', ...(require('/data/Chenhui/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/data/Chenhui/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/data/Chenhui/src/models/login.js').default) });
app.model({ namespace: 'project', ...(require('/data/Chenhui/src/models/project.js').default) });
app.model({ namespace: 'search', ...(require('/data/Chenhui/src/models/search.js').default) });
app.model({ namespace: 'setting', ...(require('/data/Chenhui/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/data/Chenhui/src/models/user.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
