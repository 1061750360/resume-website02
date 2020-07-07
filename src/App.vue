<template>
  <div id="app">
    <loading></loading>
    <full-page></full-page>
  </div>
</template>

<script>
  import FullPage from './views/FullPage'
  import Loading from './components/common/Loading'

  export default {
    components: {
      FullPage,
      Loading
    }
  }
</script>
