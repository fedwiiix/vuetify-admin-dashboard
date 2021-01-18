<template>
  <v-card class="mx-auto">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{ data.title }}
        </div>
        <v-list-item-title class="headline mb-1">
          {{ data.content }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ data.subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar
        tile
        size="100"
        class="rounded-lg"
        :color="data.color"
      >
        <v-icon dark size="60">{{ data.icon }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider class="ml-2 mr-2" v-if="data.link" />
    <v-card-actions v-if="data.link">
      <v-btn block plain>
        <v-icon left small>
          {{ data.linkIcon }}
        </v-icon>
        <span>
          {{ data.link }}
        </span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data: () => ({
    cards: ["Today", "Yesterday"],
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
  }),
};
</script>
