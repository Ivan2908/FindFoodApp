<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-img
        class="mx-1"
        max-height="40"
        max-width="40"
        contain
        src="./src/assets/logoNavBar.svg"
      />
      <v-app-bar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click="$store.dispatch('ConfigModule/toggleTheme')">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-progress-linear
        :active="loading"
        :indeterminate="progress === null"
        :value="progress"
        absolute
        bottom
        color="primary accent-3"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list link>
        <v-list-item :to="{ name: 'Home' }">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'Categories' }">
          <v-list-item-icon>
            <v-icon>mdi-food-fork-drink</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Categories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'Photos' }">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>

    <v-footer padless>
      <section class="footerSettings">
        <div class="mb-3">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
        <div class="hidden-md-and-down white--text">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum.
        </div>
        <div class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Find Food</strong>
        </div>
      </section>

      <div class="custom-shape-divider-bottom-1651036633">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          />
        </svg>
      </div>
    </v-footer>

    <v-overlay v-show="loading" z-index="999">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <v-snackbar
      v-model="snackbar"
      app
      timeout="5000"
      transition="scroll-y-transition"
    >
      {{ snackbarText }}
      <template #action="{ attrs }">
        <v-btn color="primary" icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
/** App */
export default class App extends Vue {
  /** Window title */
  title: string = import.meta.env.VITE_APP_TITLE;
  /** Drawer menu visibility */
  drawer: boolean = false;
  /** Snackbar visibility */
  snackbar: boolean = false;

  // Icons for the Footer
  icons: Array<String> = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ];

  /** Theme dark mode */
  get '$vuetify.theme.dark'(): boolean {
    return this.$store.getters['ConfigModule/toggleTheme'];
  }
  /** Snackbar text */
  get snackbarText(): string {
    return this.$store.getters.message;
  }
  /** Get progress percentage */
  get progress(): number {
    return this.$store.getters.progress;
  }
  /**
   * Set progress percentage
   *
   * @param value - Percentage
   */
  set progress(value: number) {
    this.$store.dispatch('setProgress', value);
  }
  /** Get loading overlay visibility */
  get loading(): boolean {
    return this.$store.getters.loading;
  }
  /**
   * Set loading overlay
   *
   * @param value - Visibility
   */
  set loading(value: boolean) {
    this.$store.dispatch('setLoading', value);
  }
  /** Error Message */
  get error(): boolean {
    return this.$store.getters.error;
  }
  /** Toggle Theme Dark/Light mode */
  get themeDark(): boolean {
    return this.$store.getters['ConfigModule/themeDark'];
  }

  /** Theme Changer */
  @Watch('themeDark')
  onThemeChanged(): void {
    this.$vuetify.theme.dark = this.$store.getters['ConfigModule/themeDark'];
  }
  /** Modify snackbar text */
  @Watch('$store.getters.message')
  onSnackbarTextChanged(): void {
    this.snackbar = true;
  }

  /** When route change, hide snackbar */
  @Watch('$route')
  onRouteChanged(): void {
    this.snackbar = false;
  }
  /** When loading */
  @Watch('loading')
  onLoading() {
    // console.log('loading:', this.loading);
    // change cursor
    document.body.style.cursor = this.loading ? 'wait' : 'auto';
  }

  /** When error has occurred */
  @Watch('error')
  onError() {
    this.$router.push({ name: 'Error' });
  }

  /** Run once. */
  mounted() {
    this.$vuetify.theme.dark = this.$store.getters['ConfigModule/themeDark'];
    document.title = this.title;
  }
}
</script>

<style lang="scss">
@import 'node_modules/vuetify/src/styles/styles';

html {
  // Fix always scrollbar shown.
  overflow-y: auto;
  // Modern scrollbar style
  scrollbar-width: thin;
  scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #ffff;
}

.theme--light.v-footer {
  background-color: #ffff;
}

.theme--dark.v-footer {
  background-color: #1e1e1e1e;
}

.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: #1e1e1e1e;
}

.footerSettings {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  width: 100%;
  justify-content: flex-end;
  padding: 30px 30vw;
  z-index: 9;
  flex-wrap: nowrap;
  align-items: center;
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: map-get($grey, 'lighten-2');
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: map-get($grey, 'base');
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.theme-- {
  &light {
    scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
    ::-webkit-scrollbar-track {
      background-color: map-get($grey, 'lighten-2');
    }
  }
  &dark {
    scrollbar-color: map-get($grey, 'darken-2') map-get($grey, 'base');

    ::-webkit-scrollbar-track {
      background-color: map-get($grey, 'darken-2');
    }
  }
}

.custom-shape-divider-bottom-1651036633 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1651036633 svg {
  position: relative;
  display: block;
  width: calc(120% + 1.3px);
  height: 260px;
}

.custom-shape-divider-bottom-1651036633 .shape-fill {
  fill: #1b6bc7;
}
</style>
