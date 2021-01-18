<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer.opened"
    :mini-variant.sync="drawer.minimised"
    app
    :dark="
      appData.barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'
    "
    :src="appData.barImage"
    width="260"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${appData.barColor}`" v-bind="props" />
    </template>

    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img
          src="https://fatihunlu.github.io/vue-admin-template/static/logo.png"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-title>John Leider</v-list-item-title>
    </v-list-item>

    <v-divider/>

    <v-list>
      <v-list-item
        v-for="[icon, text] in links"
        :key="icon"
        link
        @click="changeRoute(text)"
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t(`drawer.${text}`) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-btn icon color="secondary" dark class="ma-5" @click="$router.push({ name: 'Error', params: { errorCode: '500' } })"
        ><v-icon>favorite</v-icon></v-btn
      >
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    minimise: false,
    links: [
      ["menu", "dashboard"],
      ["send", "userProfile"],
      ["delete", "entries"],
      ["edit", "edit_entry"],
    ],
  }),
  computed: {
    ...mapState({ appData: (state) => state.appData }),
    drawer: {
      get() {
        return this.$store.state.appData.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
  methods: {
    changeRoute(routeName) {
      if (
        this.$route.name !== routeName &&
        this.$router.resolve({ name: routeName }).resolved.matched.length > 0
      ) {
        return this.$router.push({ name: routeName }).catch(() => {});
      }
    },
  },
};
</script>

