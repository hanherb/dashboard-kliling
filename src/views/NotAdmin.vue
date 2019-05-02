<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Error -->
    <div class="error">
      <div class="error__content">
        <h2>403</h2>
        <h3>Forbidden!</h3>
        <p>You are just a mere user.</p>
        <d-link :href="'' + user_page">
          <d-button pill>&larr; Go to user page!</d-button>
        </d-link>
      </div>
    </div>
  </d-container>
</template>
<script>
import basicFunction from '@/basicFunction';
import graphqlFunction from '@/graphqlFunction';
import address from '@/address';

export default {
  name: 'not-admin',
  data() {
    return {
      user_page: ""
    };
  },

  created: function()
  {
      this.user_page = address + ':8081';
  },
};
</script>
