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
              <!-- <input
                v-model="storesSearchInfo.selectedFields.location"
                class="search-header__input col-md-12"
                type="text"
                placeholder="Belgium Location"
              />-->
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
      // this.searchSectionOpen = !this.searchSectionOpen;
    },
    CheckScreenSize() {
      console.log("screen size: ", screen.width);
      if (screen.width < 768) {
        // this.searchSectionOpen = false;
        this.showSection.list = true;
        this.showSection.map = false;
        console.log("Mobile size ");
        console.log("searchSectionOpen: ", this.searchSectionOpen);
      } else {
        this.showSection.list = false;
        this.showSection.map = true;
      }
      console.log("list: ", this.showSection.list);
      console.log("map: ", this.showSection.map);
    },
    FindSearchResults() {
      this.$emit("FindClicked");
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
                //   console.log("mattress type selected ");
                for (
                  var j = 0;
                  j < this.storesSearchInfo.storeDetails[i].Type.length;
                  j++
                ) {
                  if (
                    this.storesSearchInfo.selectedFields.mattress ==
                    this.storesSearchInfo.storeDetails[i].Type[j]
                  ) {
                    // console.log("result's id: ", i);
                    results.push(this.storesSearchInfo.storeDetails[i]);
                  }
                }
              } else {
                // console.log("result's id: ", i);
                results.push(this.storesSearchInfo.storeDetails[i]);
              }
            }
          }
        }
      }
      this.storesSearchInfo.searchResults = results;
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
<style scoped>
.search-header {
  background-color: rgb(10, 10, 117);
  width: 100%;
  padding: 10px;
}
.search-header__title {
  font-weight: 900;
  color: #fff;
  padding: 10px 80px;
}
.search-header__search-section {
  justify-content: center;
}
.search-header__input-group {
  /* width: 30rem; */
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  font-size: 0.7rem !important;
  color: rgb(10, 10, 117);
}
.search-header__input-div {
  background-color: #fff;
  font-size: 0.7rem;
  /* border-radius: 10px 0px 0px 10px; */
  border-radius: 5px;
  border: none;
  /* padding: 0px; */
  padding: 10px;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
}
.search-header__input-label {
  margin: 0px;
  color: #fff;
  font-weight: 900;
  text-align: left;
  padding-bottom: 5px;
}
.search-header__input {
  border: none;
  padding: 0px;
}
::v-deep .bp-dropdown__icon {
  margin-left: auto;
}
::v-deep .bp-dropdown__btn {
  width: 100%;
  border: none;
  padding: 10px;
}
::v-deep .bp-dropdown {
  background-color: #fff;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 5px;
  border: none;

  /* border-left: 1px solid #ced4da; */
  /* border-radius: 0px 10px 10px 0px; */
}

.search-header__checkbox {
  display: flex;
  color: #fff;
  margin-bottom: 15px;
}
/* Customize the label (the container) */
.search-header__checkbox-item {
  display: block;
  position: relative;
  padding-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 0.7rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.search-header__checkbox-item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.search-header__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid #fff;
  border-radius: 5px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.search-header__checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.search-header__checkbox-item input:checked ~ .search-header__checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.search-header__checkbox-item .search-header__checkmark:after {
  left: 5px;
  /* top: 0px; */
  width: 5px;
  height: 10px;
  border: solid rgb(233, 164, 85);
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.search-header__btn {
  background-color: rgb(233, 164, 85);
  color: rgb(10, 10, 117);
  border-radius: 5px;
  border: none;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 10px;
  /* width: 5rem; */
}
.search-header__angle-icon {
  color: rgb(233, 164, 85);
  /* padding-top: 20px; */
  font-size: 30px;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(10, 10, 117);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(10, 10, 117);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(10, 10, 117);
}
.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none !important;
}
.search-header__input {
  text-align: left;
  font-size: 0.7rem;
}
@media (min-width: 768px) {
  .search-header__title {
    margin-bottom: 30px;
  }
  .search-header__search-section {
    position: relative;
  }
  .search-header__input-div {
    border-radius: 5px 0px 0px 5px;
    padding: 0px;
  }
  .search-header__input {
    border: none;
    border-radius: 5px;
    padding: 10px;
  }
  ::v-deep .bp-dropdown {
    border-left: 1px solid #ced4da;
    border-radius: 0px 5px 5px 0px;
  }
  ::v-deep .bp-dropdown_no-radius {
    border-radius: 0px;
  }
  .search-header__btn {
    padding-top: 10px;
    padding-bottom: 10px;
    height: fit-content;
    position: absolute;
    top: 20px;
    right: 55px;
  }
}
</style>