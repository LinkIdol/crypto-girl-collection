import Vue from 'vue';
import Router from 'vue-router';
import ItemView from '@/views/ItemView';
import ListView from '@/views/ListView';
import LoginView from '@/views/LoginView';
import FaqView from '@/views/FaqView';
import UserView from '@/views/UserView';
import TermView from '@/views/TermView';
import PrivacyView from '@/views/PrivacyView';
import BirthdayGiftView from '@/views/BirthdayGiftView';
import LuckyDraw from '@/views/LuckyDraw';

import HomePage from '@/views/HomePage';
import MyCollectionPage from '@/views/MyCollectionPage';
import CoinProfile from '@/views/CoinProfile';
import RankingList from '@/views/RankingList';
import CoinGirl from '@/views/CoinGirl';
Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomePage,
    },
    // {
    //   name: 'GirlList',
    //   path: '/list',
    //   component: ListView,
    // },
    {
      name: 'CoinGirl',
      path: '/coin/:name',
      component: CoinGirl,
    },
    {
      name: 'Collection',
      path: '/collection',
      component: MyCollectionPage,
    },
    {
      name: 'RankingList',
      path: '/RankingList',
      component: RankingList,
    },
    // {
    //   name: 'Item',
    //   path: '/item/:id(\\d+)',
    //   component: ItemView,
    // },
    // {
    //   name: 'User',
    //   path: '/user/:address',
    //   component: UserView,
    // },
    // {
    //   name: 'FAQ',
    //   path: '/faq',
    //   component: FaqView,
    // },
    // {
    //   name: 'Privacy',
    //   path: '/privacy-policy',
    //   component: PrivacyView,
    // },
    // {
    //   name: 'Term',
    //   path: '/terms-of-us',
    //   component: TermView,
    // },
    // {
    //   name: 'BirthdayGift',
    //   path: '/birthday-gift',
    //   component: BirthdayGiftView,
    // },
  ],
});
