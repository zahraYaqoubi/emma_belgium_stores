import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSection: {
      list: false,
      map: false
    },
    searchResults: [],
    storesSearchInfo: {
      searchResults: [],
      mattresses: ["All", "Emma air", "Emma Original", "Emma Hybrid"],
      storeNames: ["All", "Beter Bed", "Super Mattress"],
      selectedFields: {
        location: "",
        mattress: "All",
        store: "All",
        TryBuy: false,
        BuyOnly: false
      },
      storeDetails: [
        {
          "Name": "Beter Bed",
          "Address": "Maalse Steenweg 324 a",
          "Postcode": "8310",
          "City": "Brugge",
          "Telephone": "",
          "OfficeHours": "Maandag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: gesloten",
          "Latitude": 51.209045,
          "Longitude": 3.259293,
          "Type": ["Emma air", "Emma Hybrid"],
          "CanBuy": false,
          "TryandBuy": true,
          "logo": "logo1.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Bergensesteenweg 61",
          "Postcode": "1600",
          "City": "Sint Pieters Leeuw",
          "Telephone": "1111",
          "OfficeHours": "Maandag - Zaterdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zondag: gesloten",
          "Latitude": 50.7798,
          "Longitude": 4.24368,
          "Type": ["Emma air", "Emma Original", "Emma Hybrid"],
          "CanBuy": true,
          "TryandBuy": false,
          "logo": "logo2.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Kortrijkstraat 333",
          "Postcode": "8560",
          "City": "Wevelgem",
          "Telephone": "2187321",
          "OfficeHours": "Maandag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: gesloten",
          "Latitude": 50.816182,
          "Longitude": 3.206461,
          "Type": ["Emma air", "Emma Original"],
          "CanBuy": false,
          "TryandBuy": true,
          "logo": "logo3.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Tiensesteenweg 376 c",
          "Postcode": "3360",
          "City": "Korbeek-Lo",
          "Telephone": "8793218",
          "OfficeHours": "Dinsdag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 50.867662,
          "Longitude": 4.740862,
          "Type": ["Emma Original", "Emma Hybrid"],
          "CanBuy": true,
          "TryandBuy": false,
          "logo": "logo4.png"
        },
        {
          "Name": "Super Mattress",
          "Address": "Buitensingel 20",
          "Postcode": "3920",
          "City": "Lommel",
          "Telephone": "98939874",
          "OfficeHours": "Dinsdag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 51.2220026,
          "Longitude": 5.3060647,
          "Type": ["Emma air", "Emma Hybrid"],
          "CanBuy": true,
          "TryandBuy": false,
          "logo": "logo5.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Gentseweg 494 bus 6",
          "Postcode": "8793",
          "City": "Waregem",
          "Telephone": "897923",
          "OfficeHours": "Maandag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: gesloten",
          "Latitude": 50.896338,
          "Longitude": 3.39616,
          "Type": ["Emma air", "Emma Original", "Emma Hybrid"],
          "CanBuy": false,
          "TryandBuy": true,
          "logo": "logo1.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Leuvense Steenweg 10",
          "Postcode": "1932",
          "City": "Sint-Stevens-Woluwe",
          "Telephone": "876438724",
          "OfficeHours": "Maandag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: gesloten",
          "Latitude": 50.863306,
          "Longitude": 4.43145,
          "Type": ["Emma air", "Emma Original", "Emma Hybrid"],
          "CanBuy": true,
          "TryandBuy": false,
          "logo": "logo2.png"
        },
        {
          "Name": "Super Mattress",
          "Address": "Heidebaan 58",
          "Postcode": "9100",
          "City": "Sint Niklaas",
          "Telephone": "8731297",
          "OfficeHours": "Dinsdag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 51.17022,
          "Longitude": 4.179918,
          "Type": ["Emma air", "Emma Original"],
          "CanBuy": true,
          "TryandBuy": false,
          "logo": "logo3.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Brugsesteenweg 449",
          "Postcode": "8800",
          "City": "Roeselare",
          "Telephone": "8732198",
          "OfficeHours": "Maandag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: gesloten",
          "Latitude": 50.970135,
          "Longitude": 3.11976,
          "Type": ["Emma Original", "Emma Hybrid"],
          "CanBuy": true,
          "TryandBuy": false,
          "logo": "logo4.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Torhoutsesteenweg 653",
          "Postcode": "8400",
          "City": "Oostende",
          "Telephone": "8732187",
          "OfficeHours": "Maandag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 51.19852,
          "Longitude": 2.901821,
          "Type": ["Emma air", "Emma Original"],
          "CanBuy": true,
          "TryandBuy": false,
          "logo": "logo5.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Lammerdries-Winkelstraat 4C5B",
          "Postcode": "2250",
          "City": "Olen",
          "Telephone": "98743298",
          "OfficeHours": "Dinsdag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 51.150824,
          "Longitude": 4.90233,
          "Type": ["Emma air", "Emma Hybrid"],
          "CanBuy": false,
          "TryandBuy": true,
          "logo": "logo1.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Bredabaan 891-893",
          "Postcode": "2170",
          "City": "Merksem",
          "Telephone": "7782910",
          "OfficeHours": "Maandag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: gesloten",
          "Latitude": 51.255554,
          "Longitude": 4.460807,
          "Type": ["Emma Original", "Emma Hybrid"],
          "CanBuy": false,
          "TryandBuy": true,
          "logo": "logo2.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Antwerpse Steenweg 69 bus 0109",
          "Postcode": "9080",
          "City": "Lochristi",
          "Telephone": "87498323",
          "OfficeHours": "Dinsdag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 51.089536,
          "Longitude": 3.811974,
          "Type": ["Emma air", "Emma Original", "Emma Hybrid"],
          "CanBuy": true,
          "TryandBuy": false,
          "logo": "logo3.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Mechelsesteenweg 99",
          "Postcode": "1910",
          "City": "Kampenhout",
          "Telephone": "89743298",
          "OfficeHours": "Dinsdag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 50.959787,
          "Longitude": 4.586158,
          "Type": ["Emma Original", "Emma Hybrid"],
          "CanBuy": true,
          "TryandBuy": false,
          "logo": "logo4.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Hasseltweg 178",
          "Postcode": "3600",
          "City": "Genk",
          "Telephone": "872983423",
          "OfficeHours": "Dinsdag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 50.960876,
          "Longitude": 5.456262,
          "Type": ["Emma air", "Emma Original", "Emma Hybrid"],
          "CanBuy": false,
          "TryandBuy": true,
          "logo": "logo5.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Mechelsesteenweg 85",
          "Postcode": "9200",
          "City": "Dendermonde",
          "Telephone": "98723984",
          "OfficeHours": "Dinsdag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 51.035948,
          "Longitude": 4.116166,
          "Type": ["Emma air", "Emma Hybrid"],
          "CanBuy": false,
          "TryandBuy": true,
          "logo": "logo1.png"
        },
        {
          "Name": "Beter Bed",
          "Address": "Antwerpsesteenweg 651",
          "Postcode": "2630",
          "City": "Aarstelaar",
          "Telephone": "98798432",
          "OfficeHours": "Dinsdag - Vrijdag: 10.00 - 18.00",
          "OfficeHoursWeekend": "Zaterdag: 10.00 - 18.00/ Zondag: 13.00 - 18.00",
          "Latitude": 51.146146,
          "Longitude": 4.379953,
          "Type": ["Emma air", "Emma Original"],
          "CanBuy": false,
          "TryandBuy": true,
          "logo": "logo2.png"
        }
      ]
    }
  }
    ,
    getters: {
      showSection: state => {
        return state.showSection;
      },
      storesSearchInfo: state => {
        state.storesSearchInfo.searchResults = state.storesSearchInfo.storeDetails;
        return state.storesSearchInfo;
      }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
  })
