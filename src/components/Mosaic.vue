<template>
  <section class="Mosaic">
    <Header :profile-data="profile" />
    <main>
      <Grid v-if="!profile.isPrivate">
        <Post v-for="(photo, i) in photos" :key="i" v-bind="photo" />
      </Grid>
      <p v-else class="isPrivate">
        <Lock />
        This profile is private
      </p>
    </main>
  </section>
</template>

<script>
import InstagramService from "@/services/InstagramService";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Lock from "@/components/svg/Lock";
import Post from "@/components/Post";
export default {
  components: {
    Grid,
    Header,
    Lock,
    Post
  },

  data() {
    return {
      service: null,
      profile: {},
      photos: []
    };
  },

  props: {
    user: {
      required: false
    }
  },

  watch: {
    user() {
      this.profile = {};
      this.getData();
    }
  },

  methods: {
    async getData() {
      if (!this.user) return;
      await this.service.fetchData(this.user);
      this.photos = this.service.photos;
      this.profile = this.service.profileData;
      this.resizeAllGridItems();
    },

    resizeGridItem(item) {
      const grid = document.getElementsByClassName("Grid")[0];
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      const rowSpan = Math.ceil(
        (item.querySelector("Post").getBoundingClientRect().height + rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    },

    resizeAllGridItems() {
      const allItems = document.getElementsByClassName("Post");
      for (let x = 0; x < allItems.length; x++) {
        this.resizeGridItem(allItems[x]);
      }
    }
  },

  created() {
    this.service = new InstagramService();
  }
};
</script>

<style>
.isPrivate {
  text-align: center;
  font-size: 2rem;
}

.Mosaic {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (min-width: 468px) {
  .Mosaic .Header {
    width: 50%;
  }

  .Mosaic main {
    width: 50%;
  }
}

@media screen and (min-width: 768px) {
  .Mosaic .Header {
    width: 33%;
  }

  .Mosaic main {
    width: 66%;
  }
}
</style>
