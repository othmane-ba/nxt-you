<template>
  <div>
    <!-- SPHERE -->
    <div class="sphere js-page-enter-animated">
      <!-- SPHERE OVERLAY -->
      <div class="sphere__overlay js-sphere-overlay"></div>
      <!-- /SPHERE OVERLAY -->

      <!-- SPHERE INNER -->
      <div class="sphere__inner js-sphere-bg">
        <div id="canvas">
          <canvas class="bg-effect layer" data-depth="0.2"></canvas>
        </div>
      </div>
      <!-- /SPHERE INNER -->
    </div>
    <!-- /SPHERE -->

    <!-- HERO -->
    <section id="hero" class="hero js-page-enter-animated">
      <!-- HERO INNER -->
      <div class="hero__inner">
        <!-- CONTAINER -->
        <div class="container">
          <img
            class="hero__inner__logo mb-4 mt-4"
            src="~/assets/images/logo.png"
            alt="NXT YOU"
          />

          <!-- HERO TITLE  -->
          <TypedTitle></TypedTitle>
          <!-- /HERO TITLE -->

          <!-- HERO BUTTON -->
          <button
            class="button button--outline button--rec hero__inner__button pointer-large js-down-button"
          >
            <i class="ti-arrow-down"></i>
            <i class="ti-arrow-down"></i>
          </button>
          <!-- /HERO BUTTON -->
        </div>
        <!-- /CONTAINER -->
      </div>
      <!-- /HERO INNER -->
    </section>
    <!-- /HERO -->

    <!-- INTRO TEXT -->
    <section class="intro-text">
      <!-- CONTAINER -->
      <div class="container">
        <!-- GRID ROW -->
        <div data-animation-container class="grid-row">
          <!-- TITLE -->
          <div class="grid-col-24 text-center">
            <h2>
              <span
                data-animation-child
                class="title-fill"
                data-animation="title-fill-anim"
                data-text="We are Creative"
                >We are Creative</span
              ><br />
              <span
                data-animation-child
                class="title-fill tr-delay01"
                data-animation="title-fill-anim"
                data-text="We are Xen"
                >We are Xen</span
              >
            </h2>
          </div>
          <!-- /TITLE -->

          <!-- TEXT -->
          <div class="grid-col-24 grid-col-lg-12">
            <p
              data-animation-child
              class="fade-anim-box tr-delay02"
              data-animation="fade-anim"
            >
              Affogato thundercats quinoa, portland cold-pressed edison bulb
              artisan paleo banjo tousled try-hard food truck pop-up bushwick
              godard. Occupy 90's try-hard tote bag chicharrones stumptown
              polaroid hashtag cliche +1, tousled fanny pack. Tote bag iPhone
              crucifix hella helvetica food truck bicycle rights cloud bread. Yr
              iPhone asymmetrical, next level vexillologist godard blog green
              juice chia. Tacos jean shorts pickled PBR&B poutine.
            </p>
          </div>
          <!-- /TEXT -->

          <!-- TEXT -->
          <div class="grid-col-24 grid-col-lg-12">
            <p
              data-animation-child
              class="fade-anim-box tr-delay03"
              data-animation="fade-anim"
            >
              Godard slow-carb chartreuse occupy, tumblr letterpress pok pok
              tattooed yr lyft yuccie kinfolk. IPhone kombucha shaman gastropub
              snackwave 90's lo-fi pug chillwave pok pok tofu. Swag deep v
              listicle roof party seitan man braid raclette church-key trust
              fund locavore vexillologist green juice raw denim tilde meh.
              Austin thundercats locavore taiyaki snackwave hoodie put a bird on
              it tattooed selvage kitsch ramps.
            </p>
          </div>
          <!-- /TEXT -->

          <!-- FOOTER -->
          <div class="grid-col-24 text-center">
            <strong
              data-animation-child
              class="fade-anim-box tr-delay04"
              data-animation="fade-anim"
              >Godard slow-carb chartreuse occupy, tumblr letterpress</strong
            >
          </div>
          <!-- /FOOTER -->
        </div>
        <!-- /GRID ROW -->
      </div>
      <!-- /CONTAINER -->
    </section>
    <!-- /INTRO TEXT -->

    <!-- PORTFOLIO -->
    <section id="portfolio" data-animation-container class="portfolio">
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
            <a
              href="#"
              class="portfolio__card mt-4 m-lg-5 mt-lg-0 pointer-right"
            >
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
    </section>
    <!-- /PORTFOLIO -->

    <!-- CLIENT -->
    <section class="client">
      <!-- CONTAINER -->
      <div class="container">
        <!-- CLIENT-TITLE -->
        <h2 class="mb-4" data-animation-container>
          <span
            data-animation-child
            class="title-fill"
            data-animation="title-fill-anim"
            data-text="Fine Folks"
            >Fine Folks</span
          ><br />
          <span
            data-animation-child
            class="title-fill tr-delay01"
            data-animation="title-fill-anim"
            data-text="We’ve Worked"
            >We’ve Worked</span
          ><br />
          <span
            data-animation-child
            class="title-fill tr-delay02"
            data-animation="title-fill-anim"
            data-text="With"
            >With</span
          >
        </h2>
        <!-- /CLIENT-TITLE -->

        <!-- CLIENT-LIST -->
        <BoxList></BoxList>
        <!-- /CLIENT-LIST -->
      </div>
      <!-- /CONTAINER -->
    </section>
    <!-- /CLIENT -->

    <!-- CONTACT -->
    <section id="contact" class="contact text-center" data-animation-container>
      <!-- CONTAINER -->
      <div class="container">
        <!-- CONTACT-TITLE -->
        <h2>
          <span
            data-animation-child
            class="title-fill"
            data-animation="title-fill-anim"
            data-text="Contact"
            >Contact</span
          ><br />
        </h2>
        <!-- /CONTACT-TITLE -->

        <p
          class="text-center mb-4 mt-4 fade-anim-box tr-delay03"
          data-animation-child
          data-animation="fade-anim"
        >
          Want to say hello? Want to know more about us?<br />
          Drop us an email and we will get back to you as soon as we can.
        </p>

        <!-- FORM -->
        <ContactForm></ContactForm>
        <!-- /FORM -->
      </div>
      <!-- /CONTAINER -->
    </section>
    <!-- /CONTACT -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
