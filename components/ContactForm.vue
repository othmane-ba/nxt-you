<template>
  <!-- FORM -->
  <form
    id="contact-form"
    class="form fade-anim-box tr-delay04"
    data-animation-child
    data-animation="fade-anim"
  >
    <div id="form-loader" class="hide-this">
      <!-- SPINNER CONTAINER -->
      <div class="spinner-container">
        <div class="css-spinner"></div>
      </div>
      <!-- /SPINNER CONTAINER -->
    </div>

    <div class="form__group form__alert js-form-alert">
      <div class="form__alert__title">
        <i class="form__alert__title__icon js-form-alert-icon"></i>
        <h6 class="js-form-alert-title"></h6>
      </div>
      <div class="js-form-alert-list"></div>
    </div>

    <!-- CONTROL GROUP -->
    <div class="form__group">
      <label class="form__group__label pointer-small" for="contact-name"
        >Name</label
      >
      <input
        id="contact-name"
        type="text"
        name="name"
        class="form__group__control"
      />
    </div>
    <!-- /CONTROL GROUP -->

    <!-- CONTROL GROUP -->
    <div class="form__group">
      <label class="form__group__label pointer-small" for="contact-email"
        >Email</label
      >
      <input
        id="contact-email"
        type="text"
        name="email"
        class="form__group__control"
      />
    </div>
    <!-- /CONTROL GROUP -->

    <!-- PHANTOM ELEMENT ( HONEYPOT CAPTCHA FOR SECURITY ) -->
    <div class="form__group fhp-input">
      <label class="form__group__label pointer-small" for="contact-phone"
        >Phone</label
      >
      <input
        id="contact-phone"
        type="phone"
        name="phone"
        class="form__group__control"
      />
    </div>
    <!-- /PHANTOM ELEMENT ( HONEYPOT CAPTCHA FOR SECURITY ) -->

    <!-- CONTROL GROUP -->
    <div class="form__group">
      <label class="form__group__label pointer-small" for="contact-message"
        >Message</label
      >
      <textarea
        id="contact-message"
        name="message"
        class="form__group__control"
      ></textarea>
    </div>
    <!-- /CONTROL GROUP -->

    <!-- CONTROL GROUP -->
    <div class="form__group">
      <!-- BUTTON -->
      <button
        type="submit"
        class="button button--solid form__group__submit pointer-large"
      >
        <i class="ti-arrow-right"></i>
        <i class="ti-arrow-right"></i>
        <i class="ti-check"></i>
      </button>
      <!-- /BUTTON -->
    </div>
    <!-- /CONTROL GROUP -->
  </form>
  <!-- /FORM -->
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
