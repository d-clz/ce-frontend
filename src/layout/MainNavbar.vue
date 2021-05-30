<template>
  <navbar
    position="fixed"
    type="white"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
    class="navbar"
    ref="navbar"
  >
    <template>
      <router-link class="navbar-brand" to="/">
        <img style="width: 200px" src="img/real-logo.png" alt="ViVEXELT" />
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item search-tut">
        <form v-on:submit.prevent="onSubmit()">
          <fg-input class="" placeholder="Search" v-model="searchValue">
          </fg-input>
        </form>
      </li>
      <a class="navbar-brand s-pr12 s-pl12" to="" @click="goTo('index')">
        {{ $t("nav.home") }}
      </a>
      <a class="navbar-brand s-pr12 s-pl12" to="" @click="goTo('aboutus')">
        {{ $t("nav.about_us") }}
      </a>
      <a class="navbar-brand s-pr12 s-pl12" to="" @click="goTo('tutorials')">
        {{ $t("nav.activities") }}
      </a>
      <a class="navbar-brand s-pr12 s-pl12" to="" @click="goTo('research')">
        {{ $t("nav.research_published") }}
      </a>
      <a class="navbar-brand s-pr12 s-pl12" to="" @click="goTo('contact')">
        {{ $t("nav.contact") }}
      </a>
      <drop-down tag="li" icon="now-ui-icons design_app" class="nav-item">
        <template v-slot:title>
          <a class="dropdown-toggle nav-link" data-toggle="dropdown">
            <img
              style="width: 35px"
              v-if="currentLang === 'en'"
              class="s-mr12"
              src="img/flag_en.png"
              alt="English"
            />
            <img
              style="width: 35px"
              v-if="currentLang === 'vn'"
              class="s-mr12"
              src="img/flag_vn.png"
              alt="Vietnamese"
            />
          </a>
        </template>
        <language-item
          name="English"
          code="en"
          img="img/flag_en.png"
          @langChange="onLangChange"
        />
        <language-item
          name="Vietnamese"
          img="img/flag_vn.png"
          code="vn"
          @langChange="onLangChange"
        />
      </drop-down>
      <!-- <li class="nav-item search-modal">
        <a class="nav-link" style="cursor: pointer" @click="showSearch = true">
          <i class="fas fa-search"></i>
        </a>
      </li> -->
      <!-- <li class="nav-item search-modal">
        <n-switch v-model="language">
          <template v-slot:on style="height: 100px">VIETNAME</template>
          <template v-slot:off>ENGLISHT</template>
        </n-switch>
      </li> -->
    </template>
    <modal
      :show.sync="showSearch"
      headerClasses="justify-content-center"
      type="notice"
    >
      <h4 slot="header" class="title title-up">Modal title</h4>
      <div class="form__group field">
        <form v-on:submit.prevent="onSubmit()">
          <input
            type="input"
            class="form__field"
            placeholder="Enter something to search"
            name="name"
            id="name"
            v-model="searchValue"
          />
          <label for="name" class="form__label">Search</label>
        </form>
      </div>
    </modal>
  </navbar>
</template>

<script>
import { Navbar, DropDown } from '@/components';
import { Popover } from 'element-ui';
import { mapActions, mapState } from 'vuex'
import LanguageItem from '../pages/components/LanguageItem.vue';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover,
    DropDown,
    LanguageItem
  },
  data() {
    return {
      showSearch: false,
      searchValue: '',
    }
  },
  computed: {
    ...mapState("search", {
      currentLang: (state) => state.language,
    })
  },
  methods: {
    ...mapActions('search', {
      searchTut: 'searchTut',
      setLang: 'setLang'
    }),
    onSubmit: function () {
      this.searchTut(this.searchValue)
      if (this.$route.name === 'tutorials') {
        this.$router.replace({ query: { search: this.searchValue } })
      } else {
        this.$router.push({ name: 'tutorials', query: { search: this.searchValue } })

      }
      this.showSearch = false
      //this.searchValue = ''
      this.toggle()
    },
    toggle() {
      this.$refs['navbar'].toggle()
    },
    goTo(route) {
      this.toggle()
      if (this.$route.name !== route) {
        this.$router.push({ name: route })
      }
    },
    onLangChange(lg) {
      this.setLang(lg)
    }
  }
};
</script>

<style scoped></style>
