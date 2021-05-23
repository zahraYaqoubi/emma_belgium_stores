<template>
  <div class="map row">
    <div class="col col-md-3 map__details-list pr-0" v-if="showSection.list">
      <p class="map__list-title">Stores near you</p>
      <hr class="mt-0 mb-4 mx-2" />
      <div v-for="(store, key) of searchResults" :key="key">
        <store-details :store="store"/>
      </div>
    </div>
    <!-- The div to hold the map -->
    <div id="map" class="col" v-if="showSection.map">
      <google-map />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StoreDetails from "./StoreDetails.vue";
import GoogleMap from "./GoogleMap.vue";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["showSection"]),
    searchResults() {
      return this.$store.getters.storesSearchInfo.searchResults;
    }
  },
  watch: {
    searchResults(newValue, oldValue) {
      this.searchResults = newValue;
      if (screen.width > 768) {
        this.showSection.list = true;
      }
      console.log("old results: ", oldValue.length);
      console.log("new results: ", newValue.length);
      console.log("searchResults results: ", this.searchResults.length);
      console.log("showSection.list: ", this.showSection.list);
    }
  },
  methods: {
  },
  components: {
    StoreDetails,
    GoogleMap
  }
};
</script>
<style scoped>
.map {
  margin-bottom: 50px;
}
.map__list-title {
  margin: 0px;
  padding: 16px;
  font-weight: bold;
  color: rgb(10, 10, 117);
  display: none;
}
@media (min-width: 768px) {
  .map__list-title {
    display: block;
  }
}
</style>