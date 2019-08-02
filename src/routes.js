import WantToRead from '@/views/WantToRead.vue';
import ReadAlready from '@/views/ReadAlready.vue';
import SearchResults from '@/views/SearchResults.vue';
import SignUp from '@/views/SignUp.vue';

export default [
  {
    path: '/want-to-read',
    component: WantToRead,
    name: 'want-to-read',
  },
  {
    path: '/read-already',
    component: ReadAlready,
    name: 'read-already',
  },
  {
    path: '/sign-up',
    component: SignUp,
    name: 'sign-up',
  },
  {
    path: '/',
    component: SearchResults,
    name: 'home',
  },
];
