import { createRouter, createWebHistory } from 'vue-router';
import GithubRepositoryView from '../views/GithubRepositoryView.vue';

const routes = [
  {
    path: '/',
    name: 'github',
    component: GithubRepositoryView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 