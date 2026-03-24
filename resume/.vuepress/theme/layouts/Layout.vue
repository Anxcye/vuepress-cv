<template>
  <div class="theme-container no-navbar no-sidebar">
    <Page>
      <slot name="page-top" slot="top" />
      <slot name="page-bottom" slot="bottom" />
    </Page>
  </div>
</template>

<script>
import Page from '@theme/components/Page.vue'

export default {
  components: { Page }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
