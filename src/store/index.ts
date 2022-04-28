import type {
  ActionContext,
  ActionTree,
  GetterTree,
  MutationTree,
  StoreOptions,
} from 'vuex';
import { getCurrentInstance } from '@vue/composition-api';
import Vuex, { Store } from 'vuex';
import Vue from 'vue';

// eslint-disable-next-line import/no-named-as-default
import VuexPersistence from 'vuex-persist';

// Modules
import type Restaurant from '@interfaces/Restaurant';
import ConfigModule from './ConfigModule';

Vue.use(Vuex);

/** Root State Interface */
export interface RootState {
  /* + Loading overlay */
  loading: boolean;
  /** ProgressBar Percentage */
  progress: number;
  /** SnackBar Text */
  message?: string;
  /** Error Message */
  error?: string;
  /** Search Input */
  search: string;
  /** List of Restaurants */
  restaurants: Array<Restaurant>;
}

/** State Default value */
const state: RootState = {
  loading: false,
  progress: 0,
  message: undefined,
  error: undefined,
  search: '',
  restaurants: [],
};

/** Getters */
const getters: GetterTree<RootState, RootState> = {
  loading: (s): boolean => s.loading,
  progress: (s): number => s.progress,
  message: (s): string | undefined => s.message,
  error: (s): string | undefined => s.error,
  search: (s): string | undefined => s.search,
  restaurants: (s): Array<Restaurant> => s.restaurants,
};

/** Mutations */
const mutations: MutationTree<RootState> = {
  /**
   * Store loading
   *
   * @param s - Vuex state
   * @param display - Payload
   */
  storeLoading(s, display: boolean) {
    s.loading = display;
  },
  /**
   * Store progress
   *
   * @param s - Vuex state
   * @param progres - Spayload
   */
  storeProgress(s, progress: number) {
    s.progress = progress;
    s.loading = true;
  },
  /**
   * Store snackbar text
   *
   * @param s - Vuex state
   * @param message - Payload
   */
  storeMessage(s, message: string) {
    s.message = message;
  },
  /**
   * Store error message
   *
   * @param s - Vuex state
   * @param error - Payload
   */
  storeError(s, error: string) {
    s.error = error;
  },
  /**
   * Store error message
   *
   * @param s - Vuex state
   * @param search - Payload
   */
  storeSearch(s, search: string) {
    s.search = search;
  },
  /**
   * Store error message
   *
   * @param s - Vuex state
   * @param restaurants - Payload
   */
  storeRestaurants(s, restaurants: Array<Restaurant>) {
    s.restaurants = restaurants;
  },
};

/** Actions */
const actions: ActionTree<RootState, RootState> = {
  /**
   * Loading overlay visibility
   *
   * @param context - Vuex Context
   * @param display - Visibility
   */
  setLoading(
    context: ActionContext<RootState, RootState>,
    display: boolean = false
  ) {
    context.commit('storeLoading', display);
  },
  /**
   * Loading progress bar value
   *
   * @param context - Vuex Context
   * @param progress - Percentage(0~100)
   */
  setProgress(
    context: ActionContext<RootState, RootState>,
    progress: number = 0
  ) {
    context.commit('storeProgress', progress);
  },
  /**
   * Set snackbar message.
   *
   * @param context - Vuex Context
   * @param message - Message text
   */
  setMessage(context: ActionContext<RootState, RootState>, message?: string) {
    context.commit('storeMessage', message);
  },
  /**
   * Set Error message
   *
   * @param context - Vuex Context
   * @param error - Error message etc.
   */
  setError(context: ActionContext<RootState, RootState>, error?) {
    context.commit('storeError', error);
  },
  /**
   * Set Search message
   *
   * @param context - Vuex Context
   * @param search - Error message etc.
   */
  setSearch(context: ActionContext<RootState, RootState>, search: string) {
    context.commit('storeSearch', search);
  },
  /**
   * Set restaurants list
   *
   * @param context - Vuex Context
   * @param restaurants - Error message etc.
   */
  setRestaurants(
    context: ActionContext<RootState, RootState>,
    restaurants: Array<Restaurant>
  ) {
    context.commit('storeRestaurants', restaurants);
  },
};

/** VuexStore */
const store: StoreOptions<RootState> = {
  // https://vuex.vuejs.org/guide/strict.html#development-vs-production
  strict: import.meta.env.DEV,
  state,
  getters,
  mutations,
  actions,
  modules: {
    ConfigModule,
  },
  plugins: [
    new VuexPersistence({
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE || 'vuex',
      storage: window.localStorage,
      modules: ['ConfigModule'],
    }).plugin,
  ],
};

export default new Store<RootState>(store);

/** Get vuex instance (For Composition api) */
export function useStore(): Store<RootState> {
  /** Vue Instance */
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  return instance.proxy.$store;
}
