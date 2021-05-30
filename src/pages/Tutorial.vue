<template>
  <div>
    <div class="s-pb80"></div>
    <div class="section section-about-us tutorials">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <h2 class="search-title">{{ $t("activities.benefit") }}</h2>
            <div class="row">
              <div class="col-md-7">
                <p>
                  {{ $t("activities.benefit-des") }}
                </p>
                <p>
                  <a
                    href="#"
                    class="text-bold"
                    style="font-size: 1.5rem; text-decoration: none"
                    ><b>{{ $t("activities.click_here") }}</b></a
                  >
                  {{ $t("activities.express") }}
                </p>
              </div>
              <div class="col-md-5">
                <div class="social-section">
                  <div class="social-links">
                    <a
                      href="https://www.facebook.com/"
                      title="Facebook"
                      target="_blank"
                    >
                      <img src="img/logo_fb.png" alt="Facebook" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      title="Twitter"
                      target="_blank"
                    >
                      <img src="img/logo_twitter.jpg" alt="Twitter" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      title="Youtube"
                      target="_blank"
                    >
                      <img src="img/logo_youtube.png" alt="Youtube" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      title="Instagram"
                      target="_blank"
                    >
                      <img src="img/logo_insta.png" alt="Instagram" />
                    </a>
                  </div>
                  <div class="join-courses">
                    <n-button
                      class="text-bold"
                      type="primary"
                      round
                      simple
                      style="font-size: 1rem"
                    >
                      {{ $t("activities.join_button") }}
                    </n-button>
                  </div>
                </div>
                <!-- <div class="row youtube-section">
                  <div class="col-8 name">
                    <span class="title"
                      >Youtube Channel name {{ $t("tutorial") }}</span
                    >
                    <a href=""> <i class="fab fa-youtube"></i> Subscribe</a>
                  </div>
                  <div class="col-4 image">
                    <img
                      class="d-block"
                      src="img/logo-square.jpg"
                      alt="zoe Gazeley-Eke"
                    />
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-md-10 s-mt36 search-title">
            <span v-if="searchValue && searchValue.length"
              >Search results for '{{ searchValue }}':</span
            >
            <span v-else> {{ $t("activities.course") }}</span>
          </div>
          <div class="col-md-10" v-if="loading">
            <content-loading type="blog"></content-loading>
          </div>
          <div class="col-md-10" v-else>
            <div class="row">
              <div
                class="col-md-6 article"
                v-for="(item, index) in videos"
                :key="index"
              >
                <div class="title s-pb24">
                  {{ item.title }}
                </div>
                <div class="body">
                  <a :href="item.link_video" target="_blank">
                    <img :src="getImgUrl(item.filename)" :alt="item.title" />
                    <div class="short-des">
                      {{ item.short_description }}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10 paging s-mt32">
            <n-pagination type="primary" :page-count="totalPage" v-model="page">
            </n-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://apis.google.com/js/api.js"></script>
<script>
import { Carousel, CarouselItem } from "element-ui"
import { Pagination } from "@/components"
import axios from "axios"
import { mapState } from "vuex"
import { buildQueryString } from "./constant/const"
import debounce from "lodash/debounce"
export default {
  name: "tutorial",
  bodyClass: "landing-page",
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Pagination.name]: Pagination,
  },
  data() {
    return {
      listArticles: [
        {
          title: "Video title",
          image_url: "/img/bg1.jpg",
          short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
        },
        {
          title: "Video title",
          image_url: "/img/bg3.jpg",
          short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
        },
        {
          title: "Video title",
          image_url: "/img/bg4.jpg",
          short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
        },
        {
          title: "Video title",
          image_url: "/img/bg5.jpg",
          short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
        },
      ],
      page: 1,
      loading: true,
      limit: 50,
      videos: [],
      total: 0,
      totalPage: 1,
    }
  },
  computed: {
    ...mapState("search", {
      searchValue: (state) => state.seasrchValue,
      currentLang: (state) => state.language,
    }),
  },
  async mounted() {
    await this.fetchVideo()
  },
  methods: {
    debounceFetchVideos: debounce(
      async function () {
        this.fetchVideo()
      },
      500,
      {
        leading: true,
        trailing: true,
      }
    ),
    async fetchVideo() {
      this.loading = true
      const params = {
        page: this.page || 1,
        limit: this.limit || 50,
        search: this.searchValue || "",
      }
      axios
        .get(
          `${process.env.VUE_APP_BASE_API_ENDPOINT
          }/public/get-videos?${buildQueryString(params)}`
        )
        .then(
          (response) => {
            console.log(response)
            if (
              response &&
              response.data &&
              response.data.success &&
              response.data.posts
            ) {
              this.videos = response.data.posts
              if (response.data.total) {
                this.total = response.data.total
                this.totalPage = Math.ceil(this.total / this.limit)
              }
            }
          },
          (error) => {
            console.log(error)
          }
        )
      this.loading = false
    },
    getImgUrl(name) {
      return `${process.env.VUE_APP_BASE_API_ENDPOINT}/public/image/${name}`
    },
  },
  watch: {
    searchValue: {
      handler: function () {
        this.loading = true
        this.debounceFetchVideos()
      },
      deep: true,
    },
    page: {
      handler: function () {
        this.loading = true
        this.debounceFetchVideos()
      },
    },
  },
}
</script>
<style></style>
