import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/devinnzhang/Documents/github/ChenHui/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/BasicLayout'),
          LoadingComponent: require('/Users/devinnzhang/Documents/github/ChenHui/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    routes: [
      {
        path: '/',
        redirect: '/home',
        exact: true,
      },
      {
        path: '/home',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../Home/Index'),
              LoadingComponent: require('/Users/devinnzhang/Documents/github/ChenHui/src/components/PageLoading/index')
                .default,
            })
          : require('../Home/Index').default,
        hideInMenu: true,
        exact: true,
      },
      {
        path: '/blender',
        name: 'blenderIndex',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../Blender/Index'),
              LoadingComponent: require('/Users/devinnzhang/Documents/github/ChenHui/src/components/PageLoading/index')
                .default,
            })
          : require('../Blender/Index').default,
        exact: true,
      },
      {
        path: '/juicer',
        name: 'juicerIndex',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../Juicer/Index'),
              LoadingComponent: require('/Users/devinnzhang/Documents/github/ChenHui/src/components/PageLoading/index')
                .default,
            })
          : require('../Juicer/Index').default,
        exact: true,
      },
      {
        path: '/about',
        name: 'about',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../About/Index'),
              LoadingComponent: require('/Users/devinnzhang/Documents/github/ChenHui/src/components/PageLoading/index')
                .default,
            })
          : require('../About/Index').default,
        exact: true,
      },
      {
        path: '/contact',
        name: 'contact',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../Contact/Index'),
              LoadingComponent: require('/Users/devinnzhang/Documents/github/ChenHui/src/components/PageLoading/index')
                .default,
            })
          : require('../Contact/Index').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/devinnzhang/Documents/github/ChenHui/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/devinnzhang/Documents/github/ChenHui/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
