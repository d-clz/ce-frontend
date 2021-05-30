<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/about-us-cover.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container text-left">
          <h1 class="title">{{ $t("au.title") }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us" id="home">
      <div class="container">
        <div class="row">
          <div class="col-md-7 ml-auto mr-auto text-left">
            <div class="about-section s-pb48" id="what-is-vivexelt">
              <div class="about-header s-pb24">{{ $t("au.wivive") }}</div>
              <div class="about-body">
                {{ $t("au.wivive-des") }}
              </div>
            </div>
            <div class="about-section s-pb48" id="what-is-vivexelt-aims-to">
              <div class="about-header s-pb24">{{ $t("au.vive-aims") }}</div>
              <div class="about-body">
                <ul>
                  <li>
                    {{ $t("au.vive-aims-des-1") }}
                  </li>
                  <li>
                    {{ $t("au.vive-aims-des-2") }}
                  </li>
                  <li>
                    {{ $t("au.vive-aims-des-3") }}
                  </li>
                  <li>
                    {{ $t("au.vive-aims-des-4") }}
                  </li>
                  <li>
                    {{ $t("au.vive-aims-des-5") }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="about-section s-pb48" id="who-is-vivexelt-for">
              <div class="about-header s-pb24">{{ $t("au.who-vive") }}</div>
              <div class="about-body">
                {{ $t("au.who-vive-des") }}
              </div>
            </div>
            <div class="about-section s-pb48" id="meet-vivexelt-team">
              <div class="about-header s-pb24">{{ $t("au.meet-vive") }}</div>
              <div class="about-body row">
                <div
                  class="about-ava col-lg-4"
                  v-for="(user, index) in profile"
                  :key="index"
                >
                  <img
                    class="d-block s-pb12"
                    :src="user.image"
                    :alt="user.name"
                  />
                  <span class="text-bold text-upper s-pb12">
                    {{ $t(`people.${user.name}`) }}
                  </span>
                  <span class="text-center">
                    {{ $t(`people.${user.short_description}`) }}
                  </span>
                  <router-link :to="`/profile/${index}`">
                    <n-button type="primary" round simple>Detail</n-button>
                  </router-link>
                </div>
              </div>
            </div>
            <div
              class="about-section s-pb48"
              id="when-will-the-courses-take-place"
            >
              <div class="about-header s-pb24">
                {{ $t("au.vive-take-place") }}
              </div>
              <div class="about-body">
                {{ $t("au.vive-take-place-des") }}
              </div>
            </div>
          </div>
          <div
            class="col-md-3 ml-auto mr-auto text-left fixed-scroll"
            style="height: 500px"
          >
            <scrollactive
              :offset="400"
              :scrollOffset="100"
              :duration="100"
              bezier-easing-value=".5,0,.35,1"
              activeClass="active"
              :scrollOnStart="false"
            >
              <ul class="categories">
                <li>
                  <a href="#what-is-vivexelt" class="scrollactive-item">
                    {{ $t("au.wivive") }}
                    <i class="fas fa-caret-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#what-is-vivexelt-aims-to" class="scrollactive-item">
                    {{ $t("au.vive-aims") }}
                    <i class="fas fa-caret-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#who-is-vivexelt-for" class="scrollactive-item">
                    {{ $t("au.who-vive") }}
                    <i class="fas fa-caret-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#meet-vivexelt-team" class="scrollactive-item">
                    {{ $t("au.meet-vive") }}
                    <i class="fas fa-caret-left"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#when-will-the-courses-take-place"
                    class="scrollactive-item"
                  >
                    {{ $t("au.vive-take-place") }}
                    <i class="fas fa-caret-left"></i>
                  </a>
                </li>
              </ul>
            </scrollactive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import { Profile } from "./constant/const";
export default {
  name: "about-us",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
      profile: {},
    };
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
    this.profile = Profile;
    console.log();
  },
  destroyed: function () {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function (e) {
      let height = 400;
      let div = document.getElementsByClassName("fixed-scroll")[0];
      if (window.scrollY > height) {
        var top = window.scrollY - height;
        top = top < 0 ? 0 : top;
        var maximum =
          this.getOffset(
            document.getElementById("when-will-the-courses-take-place")
          ).top - 300;
        maximum = maximum < 0 ? 0 : maximum;
        top = top > maximum ? maximum : top;
        div.style.top = `${top}px`;
      } else {
        div.style.top = `0px`;
      }
    },
    getOffset: function (el) {
      var _x = 0;
      var _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return { top: _y, left: _x };
    },
  },
};
</script>
<style></style>
