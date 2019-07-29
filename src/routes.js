import App from './App.vue';
import Event from '@/views/Event.vue';
import CreateEvents from '@/views/CreateEvents.vue';

export default [
  {
    path: '/',
    component: App,
  },
  {
    path: '/create-events',
    component: CreateEvents,
  },
  {
    path: '/event/:id',
    component: Event,
    name: 'event',
    props: true,
  },
];
