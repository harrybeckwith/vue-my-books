import WantToRead from '@/views/WantToRead.vue';
import SearchResults from '@/views/SearchResults.vue';

export default [
  {
    path: '/want-to-read',
    component: WantToRead,
    name: 'want-to-read',
  },
  {
    path: '/',
    component: SearchResults,
    name: 'home',
  },
];
