<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <div class="text-center">
      <div class="mb-4 avatar">
        <img
          class="imgCategoy"
          contain
          :src="cousinType.img"
          aspect-ratio="1"
          alt=""
        />
      </div>
      <h4 class="grey--text text--darken-2">{{ cousinType.name }}</h4>
    </div>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import type MetaInterface from '@/interfaces/MetaInterface';
import Meta from '@/Meta';
@Component({ components: { CategoryCousinFood } })
/** Cousin Types */
export default class CategoryCousinFood extends Vue {
  meta: MetaInterface = Meta;

  // Props
  @Prop({ type: Object })
  cousinType: Object;
}
</script>

<style lang="scss" scoped>
.imgCategoy {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 50%;
  background-clip: padding-box;
  object-fit: cover;
}
.avatar {
  height: 150px;
  min-width: 100px;
  width: 150px;
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  position: relative;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}
</style>
