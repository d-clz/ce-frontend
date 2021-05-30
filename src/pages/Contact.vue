<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title text-left">{{ $t("contact.contact") }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title text-primary">{{ $t("contact.contact") }}</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <i class="fas fa-phone icon40 text-primary"></i>
                <h4 class="title">{{ $t("contact.phone") }}</h4>
                <h4 class="category text-black">{{ $t("contact.phone_d") }}</h4>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <i class="fas fa-home icon40 text-primary"></i>
                <h4 class="title">{{ $t("contact.address") }}</h4>
                <h4 class="category text-black">
                  {{ $t("contact.address_d") }}
                </h4>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <i class="fas fa-envelope icon40 text-primary"></i>
                <h4 class="title">{{ $t("contact.email") }}</h4>
                <h4 class="category text-black text-lower">
                  {{ $t("contact.email_d") }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {

  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>
