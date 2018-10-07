import VueRouter from 'vue-router';

import app from './app.vue';
import personal from './components/personal.vue';
import published from './components/published.vue';
import about from './components/about.vue';
import shouye from './components/shouye/shouye.vue';
import all from './components/shouye/all.vue';
import fine from './components/shouye/fine.vue';
import share from './components/shouye/share.vue';
import recruitment from './components/shouye/recruitment.vue';
import answer from './components/shouye/answer.vue';
import content from './components/shouye/content.vue';

var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/shouye' },
    { path: '/home', component: app },
    { path: '/personal', component: personal },
    { path: '/published', component: published },
    { path: '/content/:id', component: content },
    { path: '/about', component: about },
    {
      path: '/shouye',
      component: shouye,
      meta: { show: true },
      redirect: '/shouye/all',
      children: [
        { path: 'all', component: all },
        { path: 'fine', component: fine },
        { path: 'share', component: share },
        { path: 'answer', component: answer },
        { path: 'recruitment', component: recruitment }
      ]
    }
  ],
  linkActiveClass: 'on'
});

export default router;
