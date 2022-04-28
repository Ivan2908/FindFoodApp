<template>
  <v-container class="py-15 container">
    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon>mdi-account-check</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />
      <div :class="{ 'pa-4': $vuetify.breakpoint.smAndDown }">
        <activity-profile-menu />
      </div>
    </v-navigation-drawer>
    <v-row class="d-flex flex-wrap">
      <v-col class="col-12 mb-10">
        <v-img cover height="200" class="imgHero">
          <div class="containerAvatar mt-8">
            <div
              class="d-flex justify-center justify-md-space-between align-center mx-10"
            >
              <div
                class="d-md-flex d-block align-center text-md-left text-center flex-wrap"
              >
                <div class="avatar-upload">
                  <v-avatar class="avatar profile" size="140">
                    <img
                      src="https://img1.freepng.es/20180713/aaw/kisspng-user-profile-linkedin-netwerk-money-order-fulfillm-round-face-5b494408cd2468.5239235115315282008403.jpg"
                      alt=""
                    />
                  </v-avatar>
                  <v-btn
                    class="avatar-upload-btn fab dark small grey lighten-4"
                  >
                    <v-icon class="secondary--text">mdi-camera</v-icon>
                  </v-btn>
                  <v-input type="file" class="d-none" />
                </div>
                <div class="ml-2 hidden-sm-and-down">
                  <h2
                    :class="[
                      'white--text',
                      'text-md-left',
                      'text-center',
                      'mb-1',
                      'text-h4',
                      'font-weight-medium',
                    ]"
                  >
                    Marck Ton
                  </h2>
                  <div class="d-flex mb-1 justify-center justify-md-start">
                    <v-icon class="white--text" small>mdi-map-marker</v-icon>
                    <h6 class="font-weight-medium white--text">New York, US</h6>
                  </div>
                  <h6 class="font-weight-medium white--text">
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
        <div class="px-10 mb-3">
          <v-btn
            tile
            rounded
            color="primaryColor"
            class="hidden-md-and-up white--text"
            @click.stop="drawer = !drawer"
          >
            <v-icon left>mdi-dots-vertical</v-icon>
            Profile Menu
          </v-btn>
        </div>
        <div class="box-main dashboard-box-main">
          <div class="box-sidebar border-content-column hidden-sm-and-down">
            <activity-profile-menu />
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
import ActivityProfileMenu from '@/components/ActivityProfileMenu.vue';
import FoodDataService from '../services/FoodDataService';
import { Component, Vue } from 'vue-property-decorator';
import type Restaurant from '@interfaces/Restaurant';
import CardFood from '@/components/CardFood.vue'; // @ is an alias to /src

@Component({ components: { CardFood, ActivityProfileMenu } })
/** Section */
export default class SectionParts extends Vue {
  drawer: boolean | null = false;
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
  width: 100%;
}
.box-main .box-sidebar {
  width: 280px;
  transition: all 0.3s ease-in;
}
</style>
