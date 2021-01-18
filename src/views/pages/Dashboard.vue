<template>
  <v-container fluid class="pa-5 dashboard">
    <v-row>
      <v-col xl="3" v-for="notif in notifs" :key="notif.title">
        <NotifCard class="ma-5 mt-0" :data="notif" />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" v-for="chart in charts" :key="chart.title">
        <ChartCard class="ma-5 mt-0" :data="chart" />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" v-for="i in 2" :key="i">
        <TableCard class="ma-5 mt-0" :data="dataTable" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NotifCard from "../components/NotifCard";
import ChartCard from "../components/ChartCard";
import TableCard from "../components/TableCard";

export default {
  components: {
    NotifCard,
    ChartCard,
    TableCard,
  },
  data: () => ({
    notifs: [
      {
        icon: "euro_symbol",
        color: "blue",
        title: "hello",
        subtitle: "",
        content: "$34.78",
        linkIcon: "loyalty",
        link: "Analytic",
      },
      {
        icon: "dns",
        color: "red",
        title: "world",
        subtitle: "subtitle example",
        content: "$34.78",
        linkIcon: "build",
        link: "Tracked from Google Analytic",
      },
      {
        icon: "account_circle",
        color: "amber",
        title: "hi",
        subtitle: "",
        content: "$34.78",
        linkIcon: "local_offer",
        link: "Tracked from Google",
      },
      {
        icon: "event",
        color: "green",
        title: "test",
        subtitle: "",
        content: "$34.78",
        linkIcon: "check",
        link: "Tracked Google Analytic",
      },
    ],

    charts: [
      {
        type: "line",
        title: "hello wddorld",
        subtitle: "subtitle example",
        linkIcon: "build",
        link: "Tracked from Google Analytic",
        settings: {
          xtitle: "xtitle",
          ytitle: "",
          colors: null,
          legend: true,
          suffix: "%",
          precision: 1,
        },
        data: [
          {
            name: "Workout",
            data: {
              "2017-01-01 00:00:00 -0800": 3,
              "2017-01-02 00:00:00 -0800": 9,
              "2017-01-03 00:00:00 -0800": 14,
              "2017-01-04 00:00:00 -0800": 7,
              "2017-01-05 00:00:00 -0800": 4,
            },
          },
          {
            name: "Go to concert",
            data: {
              "2017-01-01 00:00:00 -0800": 3,
              "2017-01-02 00:00:00 -0800": 2,
              "2017-01-03 00:00:00 -0800": 5,
              "2017-01-04 00:00:00 -0800": 9,
              "2017-01-05 00:00:00 -0800": 14,
            },
          },
          {
            name: "Call Parents",
            data: {
              "2017-01-01 00:00:00 -0800": 9,
              "2017-01-02 00:00:00 -0800": 13,
              "2017-01-03 00:00:00 -0800": 8,
              "2017-01-04 00:00:00 -0800": 4,
              "2017-01-05 00:00:00 -0800": 9,
            },
          },
          {
            name: "Eat Breakfast",
            data: {
              "2017-01-01 00:00:00 -0800": 5,
              "2017-01-02 00:00:00 -0800": 3,
              "2017-01-03 00:00:00 -0800": 5,
              "2017-01-04 00:00:00 -0800": 8,
              "2017-01-05 00:00:00 -0800": 5,
            },
          },
        ],
      },
      {
        type: "column",
        title: "wxc world",
        subtitle: "subtitle example",
        linkIcon: "send",
        link: "Tracked from",
        settings: {
          xtitle: "",
          ytitle: "",
          colors: ["#b00"],
          legend: false,
          suffix: "%",
          precision: 1,
        },
        data: {
          "25-14": 200,
          "05-13": 640,
          "05-15": 250,
          "05-16": 350,
          "05-17": 200,
          "05-18": 670,
          "05-19": 600,
          "05-20": 800,
        },
      },
      {
        type: "pie",
        title: "hello world",
        subtitle: "subtitle example",
        linkIcon: "favorite",
        link: "qsdqsd from Google Analytic",
        settings: {
          xtitle: "",
          ytitle: "",
          colors: null,
          legend: "bottom",
          suffix: "%",
          precision: 1,
        },
        data: {
          USA: 90,
          China: 70,
          Russia: 40,
          Germany: 30,
          "United Kingdom": 35,
          Turkey: 22,
        },
      },
    ],

    dataTable: {
      title: "Alimentation",
      itemsPerPage: 5,
      header: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      content: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    },
  }),
};
</script>