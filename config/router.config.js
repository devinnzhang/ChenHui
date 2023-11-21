export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    //document: './src/pages/document.ejs',//指定模板 需開啟exportStatic
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', name: 'home', component: './Home/Index', hideInMenu: false },
      // { path: '/blender', name: 'blenderIndex', component: './Blender/Index'},
      // { path: '/juicer', name: 'juicerIndex', component: './Juicer/Index'},
      { path: '/product', name: 'product', component: './Product/Index'},
      { path: '/about', name: 'about', component: './About/Index'},
      { path: '/contact', name: 'contact', component: './Contact/Index'}
    ],
  },
];
