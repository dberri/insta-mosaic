<template>
  <div class="Header">
    <img :src="profileData.profilePicUrl" :alt="profileData.fullName" />
    <h2 v-text="profileData.fullName"></h2>
    <p v-show="profileData.biography">
      Bio: <span v-text="profileData.biography"></span>
    </p>
    <a
      :href="profileData.externalUrl"
      target="_blank"
      v-text="profileData.externalUrl"
    ></a>
    <p v-show="profileData.followCount && profileData.followedByCount">
      Folows
      <span v-text="profileData.followCount" class="Count"></span> accounts and
      is followed by
      <span v-text="profileData.followedByCount" class="Count"></span> accounts
    </p>
  </div>
</template>

<script>
export default {
  props: {
    profileData: {
      required: true,
      type: Object
    }
  }
};
</script>

<style>
.Header {
  padding: 1rem;
}

.Header a {
  display: block;
}

.Header p,
.Header a {
  margin-bottom: 0.5rem;
}

.Header .Count {
  font-weight: bold;
}
</style>
