<template>
  <v-app-bar absolute app color="transparent" class="pl-5" flat>
    <v-btn @click="setDrawer" elevation="1" icon
      ><v-icon>{{ drawerIcon }}</v-icon></v-btn
    >
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer />

    <v-switch
      v-model="$vuetify.theme.dark"
      class="ma-0 pa-0"
      color="secondary"
      hide-details
    />

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-badge color="red" overlap bordered>
            <template v-slot:badge>
              <span>{{ notifications.length }}</span>
            </template>
            <v-icon>notifications</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list dense>
        <v-subheader>Notifications</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in notifications" :key="i">
            <v-list-item-avatar>
              <v-icon :class="item.color" dark v-text="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-icon>person</v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in settings" :key="i">
            <v-list-item-avatar>
              <v-icon :class="item.color" dark v-text="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
    drawerIcon: "more_vert",
    isMobile: false,
    notifications: [
      { title: "Real-Time", icon: "menu", color: "blue" },
      {
        title: "Audience",
        subtitle: "hello world",
        icon: "notifications",
        color: "red",
      },
      { title: "Conversions", icon: "flag", color: "green" },
    ],
    settings: [
      { title: "Profile", icon: "person", color: "amber" },
      { title: "Settings", icon: "settings", color: "green" },
      { title: "Log Out", icon: "exit_to_app", color: "blue" },
    ],
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.appData.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    this.drawer.opened = !this.isMobile;
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960;
      this.drawerIcon = this.isMobile
        ? "menu"
        : this.drawer.minimised
        ? "format_list_bulleted"
        : "more_vert";
    },
    setDrawer() {
      if (!this.isMobile) {
        this.drawer.opened = true;
        this.drawer.minimised = !this.drawer.minimised;
        this.drawerIcon = this.drawer.minimised
          ? "format_list_bulleted"
          : "more_vert";
      } else {
        this.drawer.minimised = false;
        this.drawer.opened = !this.drawer.opened;
        this.drawerIcon = "menu";
      }
    },
  },
};
</script>
