<template>
  <div class="search-header">
    <h4 class="search-header__title">
      <strong>Find a store near you</strong>
    </h4>
    <div class="d-md-flex search-header__search-section">
      <div class="col-md-6 px-0">
        <div class="d-md-flex search-header__input-group">
          <div class="p-0 pb-3 col-12 col-md-4">
            <p class="search-header__input-label">Your Location</p>
            <div class="search-header__input-div">
              <GmapAutocomplete
                @place_changed="setPlace"
                class="btn search-header__input col-md-12"
                placeholder="Belgium Location"
              />
              <i class="fa fa-search my-auto d-md-none"></i>
            </div>
          </div>
          <div class="p-0 pb-3 col-12 col-md-4" v-if="searchSectionOpen">
            <p class="search-header__input-label">Mattresses</p>
            <dropdown :close-on-click="true" class="bp-dropdown_no-radius">
              <template slot="btn">{{ storesSearchInfo.selectedFields.mattress }}</template>
              <template slot="body">
                <div v-for="(mattress, i) of storesSearchInfo.mattresses" :key="i">
                  <p @click="storesSearchInfo.selectedFields.mattress = mattress">{{ mattress }}</p>
                </div>
              </template>
            </dropdown>
          </div>
          <div class="p-0 pb-3 col-12 col-md-4" v-if="searchSectionOpen">
            <p class="search-header__input-label">Stores</p>
            <dropdown :close-on-click="true">
              <template slot="btn">{{ storesSearchInfo.selectedFields.store }}</template>
              <template slot="body">
                <div v-for="(store, i) of storesSearchInfo.storeNames" :key="i">
                  <p @click="storesSearchInfo.selectedFields.store = store">{{ store }}</p>
                </div>
              </template>
            </dropdown>
          </div>
        </div>
        <div class="search-header__checkbox">
          <label class="search-header__checkbox-item">
            <input type="checkbox" v-model="storesSearchInfo.selectedFields.TryBuy" />
            <span class="search-header__checkmark"></span>
            Try & Buy
          </label>

          <label class="search-header__checkbox-item">
            <input type="checkbox" v-model="storesSearchInfo.selectedFields.BuyOnly" />
            <span class="search-header__checkmark"></span>
            Buy Only
          </label>
        </div>
      </div>
      <button
        @click="FindSearchResults"
        class="col-12 col-md-2 search-header__btn"
        v-if="searchSectionOpen"
      >Find</button>
    </div>
    <i
      id="angleIcon"
      class="fas fa-angle-down d-md-none search-header__angle-icon"
      @click="ShowSearchFields"
    ></i>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Dropdown from "bp-vuejs-dropdown";

export default {
  data() {
    return {
      searchSectionOpen: false
    };
  },
  computed: {
    ...mapGetters(["storesSearchInfo", "showSection"])
  },
  beforeMount() {
    this.CheckScreenSize();
  },
  updated() {
    this.CheckScreenSize();
  },
  methods: {
    setPlace(place) {
      this.storesSearchInfo.selectedFields.location = place;
      console.log(
        "currentPlace: ",
        this.storesSearchInfo.selectedFields.location.name
      );
    },
    ShowSearchFields() {
      console.log("searchSectionOpen: ", this.searchSectionOpen);
      if (!this.searchSectionOpen) {
        document.getElementById("angleIcon").style.transform = "rotate(180deg)";
        this.searchSectionOpen = true;
      } else if (this.searchSectionOpen) {
        document.getElementById("angleIcon").style.transform = "rotate(360deg)";
        this.searchSectionOpen = false;
      }
    },
    CheckScreenSize() {
      console.log("screen size: ", screen.width);
      if (screen.width < 768) {
        this.$store.dispatch("setSectionList", true);
        this.$store.dispatch("setSectionMap", false);
        // this.showSection.list = true;
        // this.showSection.map = false;
        console.log("Mobile size ");
        console.log("searchSectionOpen: ", this.searchSectionOpen);
      } else {
        this.searchSectionOpen = true;
        // this.showSection.list = false;
        // this.showSection.map = true;
        this.$store.dispatch("setSectionList", false);
        this.$store.dispatch("setSectionMap", true);
      }
      console.log("list: ", this.showSection.list);
      console.log("map: ", this.showSection.map);
    },
    FindSearchResults() {
      this.$emit("FindClicked");
      if (screen.width < 768) this.searchSectionOpen = false;
      document.getElementById("angleIcon").style.transform = "rotate(360deg)";
      var results = [];
      for (var i = 0; i < this.storesSearchInfo.storeDetails.length; i++) {
        if (
          (this.storesSearchInfo.selectedFields.store != "All" &&
            this.storesSearchInfo.selectedFields.store ==
              this.storesSearchInfo.storeDetails[i].Name) ||
          this.storesSearchInfo.selectedFields.store == "All"
        ) {
          if (
            this.storesSearchInfo.selectedFields.TryBuy ==
              this.storesSearchInfo.storeDetails[i].TryandBuy ||
            this.storesSearchInfo.selectedFields.BuyOnly ==
              this.storesSearchInfo.storeDetails[i].CanBuy
          ) {
            if (
              (this.storesSearchInfo.selectedFields.location != "" &&
                this.storesSearchInfo.storeDetails[
                  i
                ].Address.toLowerCase().includes(
                  this.storesSearchInfo.selectedFields.location.name.toLowerCase()
                )) ||
              this.storesSearchInfo.selectedFields.location == ""
            ) {
              if (this.storesSearchInfo.selectedFields.mattress != "All") {
                for (
                  var j = 0;
                  j < this.storesSearchInfo.storeDetails[i].Type.length;
                  j++
                ) {
                  if (
                    this.storesSearchInfo.selectedFields.mattress ==
                    this.storesSearchInfo.storeDetails[i].Type[j]
                  ) {
                    results.push(this.storesSearchInfo.storeDetails[i]);
                  }
                }
              } else {
                results.push(this.storesSearchInfo.storeDetails[i]);
              }
            }
          }
        }
      }
      // this.storesSearchInfo.searchResults = results;
      this.$store.dispatch("setSearchResults", results);
      console.log("results length: ", results.length);
      console.log(
        "searchResults length: ",
        this.storesSearchInfo.searchResults.length
      );
    }
  },
  components: { Dropdown }
};
</script>
<style scoped src="./index.css" lang="css"/>