<template>
  <div :class="{ 'pa-4': $vuetify.breakpoint.smAndDown }">
    <div class="mb-3">
      <h6>Categories</h6>
      <v-checkbox v-model="checkboxPizza1" label="Pizza" />
      <v-checkbox v-model="checkboxPizza2" label="Pizza" />
      <v-checkbox v-model="checkboxPizza3" label="Pizza" />
      <v-checkbox v-model="checkboxPizza4" label="Pizza" />
    </div>
    <div class="mb-6">
      <h6>Categories By Rating</h6>
      <v-checkbox v-model="checkboxPizza5" label="5 +" />
      <v-checkbox v-model="checkboxPizza6" label="4 +" />
      <v-checkbox v-model="checkboxPizza7" label="3 +" />
      <v-checkbox v-model="checkboxPizza8" label="2 +" />
      <v-checkbox v-model="checkboxPizza9" label="1 +" />
    </div>
    <div class="mb-6">
      <h6 class="mt-6">Sort By</h6>
      <v-radio-group v-model="radioGroup">
        <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n" />
      </v-radio-group>
    </div>
    <div class="mb-6">
      <h6 class="mt-6 mb-12">Cost per person</h6>
      <v-range-slider
        :value="[5, 70]"
        :mode="range"
        :min="min"
        :max="max"
        ticks="always"
        tick-size="1"
      >
        <template v-slot:thumb-label="props">
          <v-icon dark>
            {{ props.value }}
          </v-icon>
        </template>
      </v-range-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/** Category Menu Filter*/
export default class CategoryMenuFilter extends Vue {
  radioGroup: number = 1;
  checkboxPizza1: boolean = false;
  checkboxPizza2: boolean = false;
  checkboxPizza3: boolean = false;
  checkboxPizza4: boolean = false;
  checkboxPizza5: boolean = false;
  checkboxPizza6: boolean = false;
  checkboxPizza7: boolean = false;
  checkboxPizza8: boolean = false;
  checkboxPizza9: boolean = false;

  range: Array<number> = [1, 40];
  min: number = 1;
  max: number = 99;
}
</script>
