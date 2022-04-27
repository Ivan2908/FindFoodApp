<template>
  <v-container class="py-15 container">
    <v-row class="d-flex flex-wrap">
      <v-col class="col-12 mb-10">
        <v-img cover height="200" class="imgHero">
          <div class="containerAvatar mt-8">
            <div
              class="d-flex justify-center justify-md-space-between align-center mx-10 cover-image-content"
            >
              <div
                class="d-md-flex d-block align-center text-md-left text-center flex-wrap"
              >
                <div class="avatar-upload">
                  <v-avatar class="avatar profile" size="140">
                    <img
                      src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                      alt=""
                    />
                  </v-avatar>
                  <v-btn
                    class="avatar-upload-btn fab dark small grey lighten-4"
                  >
                    <i
                      aria-hidden="true"
                      class="v-icon notranslate mdi mdi-camera theme--dark secondary--text"
                      style="font-size: 20px"
                    />
                  </v-btn>
                  <v-input type="file" class="d-none" />
                </div>
                <div class="ml-2">
                  <h2 class="white--text text-md-left text-center mb-1">
                    Marck Ton
                  </h2>
                  <div class="d-flex mb-1 justify-center justify-md-start">
                    <i
                      aria-hidden="true"
                      class="v-icon notranslate me-2 mdi mdi-map-marker theme--light white--text"
                      style="font-size: 15px"
                    />
                    <h6 class="font-weight-light white--text">New York, US</h6>
                  </div>
                  <h6 class="font-weight-light white--text">
                    Bigtime foodie..out and out dessert person
                  </h6>
                </div>
              </div>
              <div class="d-none d-md-flex mr-3">
                <div class="text-center">
                  <h2 class="font-weight-bold white--text">24</h2>
                  <h6 class="font-weight-regular white--text">Reviews</h6>
                </div>
                <div class="mx-3">
                  <hr
                    role="separator"
                    aria-orientation="vertical"
                    class="v-divider v-divider--vertical theme--dark"
                  />
                </div>
                <div class="text-center">
                  <h2 class="font-weight-bold white--text">45</h2>
                  <h6 class="font-weight-regular white--text">Photos</h6>
                </div>
                <div class="mx-3">
                  <hr
                    role="separator"
                    aria-orientation="vertical"
                    class="v-divider v-divider--vertical theme--dark"
                  />
                </div>
                <div class="text-center">
                  <h2 class="font-weight-bold white--text">1.6k</h2>
                  <h6 class="font-weight-regular white--text">Followers</h6>
                </div>
              </div>
            </div>
          </div>
        </v-img>
      </v-col>
      <v-col class="col-12">
        <div class="box-main dashboard-box-main">
          <div class="box-sidebar border-content-column">
            <div class="border">
              <h1
                class="grey--text text-subtitle-1 pa-5 text-uppercase font-weight-regular"
              >
                Activity
              </h1>
              <div>
                <a href="/dashboard/Review" class="dashboard-sidebar-link">
                  <div class="px-4 d-flex justify-space-between align-center">
                    <div class="d-flex">
                      <i
                        aria-hidden="true"
                        class="v-icon notranslate me-2 mdi mdi-message-text-outline theme--light"
                        style="font-size: 18px"
                      />
                      <p class="mb-0">Reviews</p>
                    </div>
                    <p class="mb-0">2</p>
                  </div>
                </a>
              </div>
              <router-link
                class="dashboard-sidebar-link"
                :to="{
                  name: 'Photos',
                }"
              >
                <div>
                  <div class="px-4 d-flex justify-space-between align-center">
                    <div class="d-flex">
                      <i
                        aria-hidden="true"
                        class="v-icon notranslate me-2 mdi mdi-image-area theme--light"
                        style="font-size: 18px"
                      />
                      <p class="mb-0">Photos</p>
                    </div>
                    <p class="mb-0">2</p>
                  </div>
                </div>
              </router-link>
              <div>
                <a href="/dashboard/Followers" class="dashboard-sidebar-link">
                  <div class="px-4 d-flex justify-space-between align-center">
                    <div class="d-flex">
                      <i
                        aria-hidden="true"
                        class="v-icon notranslate me-2 mdi mdi-account-multiple-check-outline theme--light"
                        style="font-size: 18px"
                      />
                      <p class="mb-0">Followers</p>
                    </div>
                    <p class="mb-0">2</p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="/dashboard/Bookmarks"
                  aria-current="page"
                  class="dashboard-sidebar-link nuxt-link-exact-active nuxt-link-active"
                >
                  <div class="px-4 d-flex justify-space-between align-center">
                    <div class="d-flex">
                      <i
                        aria-hidden="true"
                        class="v-icon notranslate me-2 mdi mdi-bookmark-outline theme--light"
                        style="font-size: 18px"
                      />
                      <p class="mb-0">Bookmarks</p>
                    </div>
                    <p class="mb-0">2</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="px-10 box-content">
            <router-view />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import FoodDataService from '../services/FoodDataService';
import { Component, Vue } from 'vue-property-decorator';
import type Restaurant from '@interfaces/Restaurant';
import CardFood from '@/components/CardFood.vue'; // @ is an alias to /src

@Component({ components: { CardFood } })
/** Section */
export default class SectionParts extends Vue {
  restaurants: Array<Restaurant> = [];

  listAllRestaurant() {
    FoodDataService.getAllRestaurants()
      .then(response => {
        this.restaurants = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  mounted() {
    this.listAllRestaurant();
  }
}
</script>

<style scoped lang="scss">
@import '../../node_modules/vuetify/src/styles/styles';
.container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}
.containerAvatar {
  width: 95%;
}
.imgHero {
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    ),
    url(https://foodhub-nuxt.vercel.app/_nuxt/img/cover-img.0f418da.png);
}
.v-avatar {
  height: 150px;
  min-width: 155px;
  width: 145px;
}
.avatar-upload {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.avatar-upload-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 4rem;
}
.box-main {
  display: flex;
  position: relative;
}
.box-main .box-content {
  width: calc(100% - 280px);
}
.box-main .box-sidebar {
  background-color: #fff;
  width: 280px;
  transition: all 0.3s ease-in;
}
.border {
  border: 1px solid #dae1e7 !important;
  border-radius: 10px !important;
}
.dashboard-box-main .dashboard-sidebar-link {
  color: #2b3445 !important;
  text-decoration: none;
  border-left: 3px solid #fff;
  display: block;
  margin-bottom: 16px;
}
.dashboard-box-main .dashboard-sidebar-link:hover {
  color: #d23f57 !important;
  border-left: 3px solid #d23f57;
}
</style>
