<template>
  <div class="header">
    <div class="header__logo">
      <router-link :to="{ name: 'Home' }">
        Movie database
      </router-link>
    </div>
    <div class="header__credits">
      <img src="../assets/tmdb_logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>
