import Vue from 'vue';
import Router from 'vue-router';

import OnlineStore from './views/OnlineStore.vue';
import HeaderNavigation from './views/HeaderNavigation.vue';
import IconSidebarNav from './views/IconSidebarNav.vue';
import PersonalBlog from './views/PersonalBlog.vue';
import EditUserProfile from './views/EditUserProfile.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import ForgotPassword from './views/ForgotPassword.vue';
import ChangePassword from './views/ChangePassword.vue';
import FileManagerList from './views/FileManagerList.vue';
import FileManagerCards from './views/FileManagerCards.vue';
import TransactionHistory from './views/TransactionHistory.vue';
import AddNewPost from './views/AddNewPost.vue';
import Errors from './views/Errors.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import Tables from './views/Tables.vue';
import BlogPosts from './views/BlogPosts.vue';
import CompanyList from './views/CompanyList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: '/home',
      meta: { layout: 'non-admin' },
      component: Home,
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('./views/Analytics.vue'),
    },
    {
      path: '/ecommerce',
      name: 'ecommerce',
      component: OnlineStore,
    },
    {
      path: '/blog-overview',
      name: 'blog-overview',
      component: PersonalBlog,
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: () => import('./views/UserProfile.vue'),
    },
    {
      path: '/edit-user-profile',
      name: 'edit-user-profile',
      component: EditUserProfile,
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'non-admin' },
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'non-admin' },
      component: Register,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      meta: { layout: 'icon-sidebar' },
      component: ForgotPassword,
    },
    {
      path: '/change-password',
      name: 'change-password',
      meta: { layout: 'icon-sidebar' },
      component: ChangePassword,
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/Users.vue'),
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: () => import('./views/AddUser.vue'),
    },
    {
      path: '/update-user',
      name: 'update-user',
      component: () => import('./views/UpdateUser.vue'),
    },
    {
      path: '/delete-user',
      name: 'delete-user',
      component: () => import('./views/DeleteUser.vue'),
    },
    {
      path: '/add-plugin',
      name: 'add-plugin',
      component: () => import('./views/AddPlugin.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./plugins/blog/views/Blog.vue'),
    },
    {
      path: '/add-blog',
      name: 'add-blog',
      component: () => import('./plugins/blog/views/Add-blog.vue'),
    },
    {
      path: '/update-blog',
      name: 'update-blog',
      component: () => import('./plugins/blog/views/Update-blog.vue'),
    },
    {
      path: '/delete-blog',
      name: 'delete-blog',
      component: () => import('./plugins/blog/views/Delete-blog.vue'),
    },
    {
      path: '/commerce',
      name: 'commerce',
      component: () => import('./plugins/commerce/views/Commerce.vue'),
    },
    {
      path: '/add-commerce',
      name: 'add-commerce',
      component: () => import('./plugins/commerce/views/Add-commerce.vue'),
    },
    {
      path: '/update-commerce',
      name: 'update-commerce',
      component: () => import('./plugins/commerce/views/Update-commerce.vue'),
    },
    {
      path: '/delete-commerce',
      name: 'delete-commerce',
      component: () => import('./plugins/commerce/views/Delete-commerce.vue'),
    },
    {
      path: '/buy-commerce',
      name: 'buy-commerce',
      component: () => import('./plugins/commerce/views/Buy-commerce.vue'),
    },
    {
      path: '/consult',
      name: 'consult',
      component: () => import('./plugins/consult/views/Consult.vue'),
    },
    {
      path: '/map-consult',
      name: 'map-consult',
      component: () => import('./plugins/consult/views/Map-consult.vue'),
    },
    {
      path: '/patient-consult',
      name: 'patient-consult',
      component: () => import('./plugins/consult/views/Patient-consult.vue'),
    },
    {
      path: '/doctor-consult',
      name: 'doctor-consult',
      component: () => import('./plugins/consult/views/Doctor-consult.vue'),
    },
    {
      path: '/supply',
      name: 'supply',
      component: () => import('./plugins/supply/views/Supply.vue'),
    },
    {
      path: '/add-supply',
      name: 'add-supply',
      component: () => import('./plugins/supply/views/Add-supply.vue'),
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('./plugins/report/views/Report.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('./plugins/account/views/Account.vue'),
    },
    {
      path: '/add-account',
      name: 'add-account',
      component: () => import('./plugins/account/views/Add-account.vue'),
    },
    {
      path: '/update-account',
      name: 'update-account',
      component: () => import('./plugins/account/views/Update-account.vue'),
    },
    {
      path: '/delete-account',
      name: 'delete-account',
      component: () => import('./plugins/account/views/Delete-account.vue'),
    },
    {
      path: '/ledger',
      name: 'ledger',
      component: () => import('./plugins/account/views/Ledger.vue'),
    },
    {
      path: '/add-ledger',
      name: 'add-ledger',
      component: () => import('./plugins/account/views/Add-ledger.vue'),
    },
    {
      path: '/file-manager-list',
      name: 'file-manager-list',
      component: FileManagerList,
    },
    {
      path: '/file-manager-cards',
      name: 'file-manager-cards',
      component: FileManagerCards,
    },
    {
      path: '/transaction-history',
      name: 'transaction-history',
      component: TransactionHistory,
    },
    {
      path: '/company-list',
      name: 'company-list',
      component: CompanyList,
    },
    {
      path: '/add-new-post',
      name: 'add-new-post',
      component: AddNewPost,
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/components-overview',
      name: 'components-overview',
      component: ComponentsOverview,
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables,
    },
    {
      path: '/blog-posts',
      name: 'blog-posts',
      component: BlogPosts,
    },
    {
      path: '/header-navigation',
      name: 'header-navigation',
      meta: { layout: 'header-navigation' },
      component: HeaderNavigation,
    },
    {
      path: '/icon-sidebar-nav',
      name: 'icon-sidebar-nav',
      meta: { layout: 'icon-sidebar' },
      component: IconSidebarNav,
    }, 
    {
      path: '/not-admin',
      name: 'not-admin',
      meta: { layout: 'non-admin' },
      component: () => import('./views/NotAdmin.vue'),
    },
    {
      path: '/not-authenticated',
      name: 'not-authenticated',
      component: () => import('./views/NotAuthenticated.vue'),
    },
    {
      path: '*',
      redirect: '/errors',
    },
  ],
});
