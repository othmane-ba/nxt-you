<template>
  <div class="container">
    <div class="grid-row">
      <div class="grid-col-24 grid-col-lg-12">
        <a href="#" class="portfolio__card mb-4 m-lg-5 pointer-right">
          <div class="portfolio__card__img ratio ratio-3x4">
            <img alt="Portfolio Image 1" src="~/assets/images/1.jpg" />
          </div>
          <div class="portfolio__card__desc mt-3">
            <span class="d-block mb-2 text-label">Web Design</span>
            <h3>Slumber</h3>
          </div>
        </a>
      </div>

      <div class="grid-col-24 grid-col-lg-12">
        <a href="#" class="portfolio__card mt-4 m-lg-5 mt-lg-0 pointer-right">
          <div class="portfolio__card__img ratio ratio-3x4">
            <img alt="Portfolio Image 2" src="~/assets/images/2.jpg" />
          </div>
          <div class="portfolio__card__desc mt-3">
            <span class="d-block mb-2 text-label">Branding</span>
            <h3>Apple Tonik</h3>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
