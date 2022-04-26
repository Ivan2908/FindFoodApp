<template>
  <div>
    <v-tabs class="mb-8" show-arrows>
      <v-tab>Menu</v-tab>
      <v-tab>Fotos Destacadas</v-tab>
      <v-tab>Reseñas</v-tab>

      <v-tab-item>
        <v-col cols="12" xl="12">
          <div class="d-flex contentMain">
            <div class="contentCategories borderRCategories">
              <div class="d-flex flex-column">
                <a
                  href="/resturant/FoodMenu"
                  aria-current="page"
                  class="mb-5 food-menu-link"
                >
                  Recomended (40)
                </a>
                <a href="/resturant/FoodMenu" aria-current="page" class="mb-5">
                  DPB Special Combos (10)
                </a>
              </div>
            </div>
            <div class="contentFood">
              <div class="px-7">
                <v-row class="d-flex flex-wrap">
                  <v-col cols="12">
                    <h3 class="font-weight-bold">Recommended</h3>
                  </v-col>
                  <v-col cols="12">
                    <div
                      class="d-flex justify-space-between align-center flex-wrap"
                    >
                      <div class="d-flex flex-wrap">
                        <div class="me-3 rounded-0 avatarPhoto">
                          <img
                            src="https://foodhub-nuxt.vercel.app/_nuxt/img/4.780fc7d.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 class="font-weight-bold mb-3">
                            Tandoori Chicken (Full)
                          </h5>
                          <v-chip
                            class="text-uppercase mb-2 theme--light v-size--small grey lighten-4 secondary--text"
                          >
                            Must Try
                          </v-chip>
                          <div class="d-flex mb-3">
                            <v-rating
                              :value="4"
                              dense
                              color="orange"
                              background-color="orange"
                              hover
                              class="mr-2"
                            />
                            <h6 class="grey--text text--darken-1 mt-1">(57)</h6>
                          </div>
                          <div class="d-flex mb-1">
                            <p
                              class="text-14 grey--text text--darken-1 text-decoration-line-through me-2 mb-0"
                            >
                              $25.000
                            </p>
                            <p
                              class="text-14 grey--text text--darken-4 me-2 mb-0"
                            >
                              $22.500
                            </p>
                            <p class="text-14 primary--text mb-0">
                              10% Descuento
                            </p>
                          </div>
                          <p class="text-14 grey--text text--darken-1">
                            (4 Pcs champiñones con pollo y crema bechamel)
                          </p>
                        </div>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div
                      class="d-flex justify-space-between align-center flex-wrap"
                    >
                      <div class="d-flex flex-wrap">
                        <div class="me-3 rounded-0 avatarPhoto">
                          <img
                            src="https://foodhub-nuxt.vercel.app/_nuxt/img/4.780fc7d.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 class="font-weight-bold mb-3">
                            Tandoori Chicken (Full)
                          </h5>
                          <v-chip
                            class="text-uppercase mb-2 theme--light v-size--small grey lighten-4 secondary--text"
                          >
                            Must Try
                          </v-chip>
                          <div class="d-flex mb-3">
                            <v-rating
                              :value="4"
                              dense
                              color="orange"
                              background-color="orange"
                              hover
                              class="mr-2"
                            />
                            <h6 class="grey--text text--darken-1 mt-1">(57)</h6>
                          </div>
                          <div class="d-flex mb-1">
                            <p
                              class="text-14 grey--text text--darken-1 text-decoration-line-through me-2 mb-0"
                            >
                              $25.000
                            </p>
                            <p
                              class="text-14 grey--text text--darken-4 me-2 mb-0"
                            >
                              $22.500
                            </p>
                            <p class="text-14 primary--text mb-0">
                              10% Descuento
                            </p>
                          </div>
                          <p class="text-14 grey--text text--darken-1">
                            (4 Pcs champiñones con pollo y crema bechamel)
                          </p>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-col>
      </v-tab-item>

      <v-tab-item>
        <v-row class="row--dense mt-2">
          <v-col cols="12" lg="6" xl="6">
            <v-row class="row--dense">
              <v-col cols="6" lg="6" xl="6">
                <v-img
                  class="responsive theme--light"
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodOne.f29cb9f.png"
                />
              </v-col>
              <v-col cols="6" lg="6" xl="6">
                <div class="responsive theme--light">
                  <v-img
                    class="responsive theme--light"
                    src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodTwo.3b74f91.png"
                  />
                </div>
              </v-col>
              <v-col cols="6" lg="6" xl="6">
                <v-img
                  class="responsive theme--light"
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodThree.fd71db5.png"
                />
              </v-col>
              <v-col cols="6" lg="6" xl="6">
                <v-img
                  class="responsive theme--light"
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodFour.e242457.png"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6" xl="6">
            <v-img
              class="responsive theme--light imgFavBig"
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/bigFood.fb87b8d.png"
            />
          </v-col>
        </v-row>
      </v-tab-item>

      <v-tab-item>
        <v-row class="row--dense">
          <v-col cols="12">
            <div class="mb-6">
              <div class="d-flex align-center flex-wrap mb-4">
                <v-avatar class="me-4 avatarPhoto">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
                <div>
                  <h5 class="mb-0">Abriella Bond</h5>
                  <p class="mb-0 text-14 grey--text text--darken-1">
                    2 Reviews, 9 Followers
                  </p>
                </div>
              </div>
              <div class="d-flex align-center mb-2">
                <v-rating
                  :value="4"
                  dense
                  color="orange"
                  background-color="orange"
                  hover
                  class="mr-2"
                />
                <span class="font-weight-bold text-14 ms-2">4.0</span>
                <span class="grey--text text--darken-1 text-14 ms-2">
                  3 Days Ago
                </span>
              </div>
              <h5 class="grey--text text--darken-2 font-weight-regular mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                massa id ut mattis. Facilisis vitae gravida egestas ac account.
              </h5>
              <v-row class="row mb-2">
                <v-col cols="6" lg="6">
                  <v-img
                    class="responsive theme--light"
                    src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodFive.63a95c3.png"
                  />
                </v-col>
                <v-col cols="6" lg="6">
                  <v-img
                    class="responsive theme--light"
                    src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodSix.d1a6e1c.png"
                  />
                </v-col>
              </v-row>
              <div>
                <span class="grey--text text--darken-1 text-14">
                  4 Likes, 2 Comments
                </span>
                <div class="mt-4">
                  <button
                    type="button"
                    class="grey--text text--darken-2 text-capitalize v-btn v-btn--text theme--light elevation-0 v-size--small"
                  >
                    <span>
                      <v-icon>mdi-thumb-up-outline</v-icon>
                      Like
                    </span>
                  </button>
                  <button
                    type="button"
                    class="grey--text text--darken-2 text-capitalize v-btn v-btn--text theme--light elevation-0 v-size--small"
                  >
                    <span>
                      <v-icon>mdi-comment-text-outline</v-icon>
                      Comment
                    </span>
                  </button>
                </div>
              </div>
              <v-divider class="my-4 v-divider theme--light" />
              <div class="mb-6">
                <div class="d-flex align-center mb-3">
                  <v-avatar class="me-3 avatarPhotoReviewComment">
                    <img
                      src="https://foodhub-nuxt.vercel.app/_nuxt/img/6.9bc51a4.png"
                      alt="Emmet"
                    />
                  </v-avatar>
                  <div class="text-14 grey--text text--darken-4 f-600">
                    Emmet McDermott
                  </div>
                </div>
                <h5 class="grey--text text--darken-2 font-weight-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius massa id ut mattis. Facilisis vitae gravida egestas ac
                  account.
                </h5>
              </div>
              <v-divider class="my-4 v-divider theme--light" />
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
/** Restaurant Tabs */
export default class RestaurantTabs extends Vue {}
</script>

<style lang="scss" scoped>
.containMain {
  position: relative;
}
.imgFavBig {
  height: 100%;
  width: 100%;
}
.contentFood {
  width: calc(100% - 280px);
}
.contentCategories {
  background-color: #fff;
  width: 260px;
  transition: all 0.3s ease-in;
}
.food-menu-link {
  font-size: 14px;
  text-decoration: none;
  color: #4b566b !important;
  font-weight: 400;
}
.borderRCategories {
  border-right: 1px solid #dae1e7;
}
a {
  background-color: transparent;
  text-decoration: none;
}
.food-menu-link,
.food-menu-link:hover {
  color: #000;
  border-right: 3px solid #5215cd;
}
.avatarPhoto {
  height: 150px;
  min-width: 150px;
  width: 150px;
}
.avatarPhotoReview {
  height: 48px;
  min-width: 48px;
  width: 48px;
}
.avatarPhotoReviewComment {
  height: 28px;
  min-width: 28px;
  width: 28px;
}
</style>
