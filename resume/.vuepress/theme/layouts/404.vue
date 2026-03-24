<template>
  <div class="theme-container"></div>
</template>

<script>
export default {
  mounted () {
    if (window.location.pathname !== '/') {
      window.location.replace('/')
    }
  }
}
</script>
