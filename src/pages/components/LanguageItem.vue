<template>
  <div style="padding: 10px 15px; cursor: pointer" @click="languagueSelect">
    <img style="width: 30px" class="s-mr12" :src="img" :alt="name" />
    <span>{{ name }}</span>
  </div>
</template>
<script>

export default {
  name: 'languague-item',

  props: {
    name: {
      type: String,
      default: 'English',
    },
    img: {
      type: String,
      default: 'img/flag_en.png',
    },
    code: {
      type: String,
      default: 'en',
    }
  },
  data() {
    return {
      visible: true
    };
  },
  methods: {
    dismissAlert() {
      this.visible = false;
    },
    languagueSelect() {
      this.$emit('langChange', this.code)
    }
  }
};
</script>
