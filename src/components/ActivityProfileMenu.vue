<template>
  <div class="border">
    <h1
      class="grey--text text-subtitle-1 pa-5 text-uppercase font-weight-regular"
    >
      Activity
    </h1>
    <div>
      <div
        class="px-4 d-flex justify-space-between align-center dashboard-sidebar-link"
      >
        <div class="d-flex">
          <v-icon class="me-2 secondary--text" small>
            mdi-message-text-outline
          </v-icon>
          <p class="mb-0">Reviews</p>
        </div>
        <p class="mb-0">2</p>
      </div>
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
            <v-icon class="me-2 secondary--text" small>mdi-image-area</v-icon>
            <p class="mb-0">Photos</p>
          </div>
          <p class="mb-0">2</p>
        </div>
      </div>
    </router-link>
    <div>
      <div
        class="px-4 d-flex justify-space-between align-center dashboard-sidebar-link"
      >
        <div class="d-flex">
          <v-icon class="me-2 secondary--text" small>
            mdi-account-multiple-check-outline
          </v-icon>
          <p class="mb-0">Followers</p>
        </div>
        <p class="mb-0">2</p>
      </div>
    </div>
    <div>
      <div
        class="px-4 d-flex justify-space-between align-center dashboard-sidebar-link"
      >
        <div class="d-flex">
          <v-icon class="me-2 secondary--text" small>
            mdi-bookmark-outline
          </v-icon>

          <p class="mb-0">Bookmarks</p>
        </div>
        <p class="mb-0">2</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
/** Activity Menu Profile */
export default class ActivityProfileMenu extends Vue {}
</script>

<style scoped>
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
