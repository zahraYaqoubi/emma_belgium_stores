<template>
  <div>
    <GmapMap :center="center" :zoom="zoom" style="width:100%;  height: 400px;">
      <GmapMarker
        :icon="{
        path: 'M12,2a8,8,0,0,0-8,8c0,5.34,6.15,12,8,12s8-6.66,8-12A8,8,0,0,0,12,2Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z'
        ,fillColor: '#E9A455' ,fillOpacity: 1,
        scale:1,
        }"
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 50.4167, lng: 4.4442 },
      zoom: 7,
      markers: []
    };
  },
  computed: {
    searchResults() {
      return this.$store.getters.storesSearchInfo.searchResults;
    }
  },
  watch: {
    searchResults(newValue, oldValue) {
      console.log("old results: ", oldValue.length);
      console.log("new results: ", newValue.length);
      this.addMarker(newValue);
    }
  },
  mounted() {
    this.addMarker(this.searchResults);
  },
  methods: {
    addMarker(updatedResults) {
      this.markers = [];
      for (var j = 0; j < updatedResults.length; j++) {
        let marker = {
          lat: updatedResults[j].Latitude,
          lng: updatedResults[j].Longitude
        };
        this.markers.push({ position: marker });
        this.center = marker;
      }
      if (this.markers.length == 1) this.zoom = 12;
      else this.zoom = 8;
      console.log("searchResults: ", this.searchResults.length);
      console.log("markers: ", this.markers.length);
    }
  }
};
</script>
<style scoped>
</style>