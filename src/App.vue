<template>
  <Container class="flex-column-center">
    <router-view class="router-view"/>
  </Container>
</template>

<script>
import {Home} from './pages'
import styled from 'vue-styled-components'
export default {
  name: 'app',
  data: () => ({

  }),
  components: {
      Container: styled.div``
  }
}
</script>

<style lang="scss">


  .router-view{
    max-width: 600px;
  }
</style>
