<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <router-link class="navbar-brand" to="/"> ViVEXELT </router-link>
          </li>
          <li>
            <router-link class="navbar-brand" to="/about">
              {{ $t("nav.about_us") }}
            </router-link>
          </li>
          <li>
            <router-link class="navbar-brand" to="/activities">
              {{ $t("nav.activities") }}
            </router-link>
          </li>
          <li>
            <router-link class="navbar-brand" to="/research-published">
              {{ $t("nav.research_published") }}
            </router-link>
          </li>
          <li>
            <router-link class="navbar-brand" to="/contact">
              {{ $t("nav.contact") }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright email-footer">
        <router-link class="navbar-brand" to="/contact">
          <i class="fas fa-envelope icon20 s-mr8"></i>
          {{ $t("nav.contact") }}: {{ $t("contact.email_d") }}
        </router-link>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
