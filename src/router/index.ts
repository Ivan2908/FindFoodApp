import type {
  NavigationGuardNext,
  Position,
  PositionResult,
  Route,
  RouteConfig,
} from 'vue-router/types/router';
import type { VuetifyGoToTarget } from 'vuetify/types/services/goto';
import { getCurrentInstance } from '@vue/composition-api';
import goTo from 'vuetify/lib/services/goto';
import VueRouter from 'vue-router';
import store from '@/store';
import Vue from 'vue';

// View
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

/** Router Config */
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadCrumb: [
        {
          text: 'Home',
        },
      ],
    },
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/views/Categories.vue'),
    meta: {
      breadCrumb(route: Route) {
        const categories = route.params.categories;
        return [
          {
            text: 'Home',
            to: { name: 'Home' },
          },
          {
            text: categories,
          },
        ];
      },
    },
  },
  {
    path: '/restaurant/:id',
    name: 'Restaurante',
    component: () => import('@/views/Restaurant.vue'),
    meta: {
      breadCrumb(route: Route) {
        const restaurant = route.params.restaurant;
        return [
          {
            text: 'Home',
            to: { name: 'Home' },
          },
          {
            text: restaurant,
          },
        ];
      },
    },
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/Account.vue'),
    meta: {
      breadCrumb(route: Route) {
        const account = route.params.account;
        return [
          {
            text: 'Home',
            to: { name: 'Home' },
          },
          {
            text: account,
          },
        ];
      },
    },
    children: [
      {
        name: 'Photos',
        path: 'photos',
        component: () => import('@/views/PhotosAccount.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/views/Error.vue'),
  },
];

const router: VueRouter = new VueRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  scrollBehavior: async (
    to: Route,
    _from: Route,
    savedPosition: void | Position
  ): Promise<PositionResult> => {
    // https://vuetifyjs.com/features/scrolling/#router3067306e4f7f7528
    let scrollTo: VuetifyGoToTarget = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return { x: 0, y: await goTo(scrollTo) };
  },
  routes,
});

router.beforeEach(
  async (_to: Route, _from: Route, next: NavigationGuardNext<Vue>) => {
    // Show Loading
    store.dispatch('setLoading', true);
    await Vue.nextTick();

    // @see https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
    // await store.restored;

    next();
  }
);

router.afterEach(() => {
  // Hide Loading
  store.dispatch('setLoading', false);
});
export default router;

/** Get router instance (For Composition api) */
export function useRouter(): VueRouter {
  /** Get Instance */
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  return instance.proxy.$router;
}

/** Get route instance (For Composition api) */
export function useRoute(): Route {
  /** Get Instance */
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  return instance.proxy.$route;
}
