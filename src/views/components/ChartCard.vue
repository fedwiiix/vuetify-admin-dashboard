<template>
  <v-card class="mx-auto">
    <v-card-text>
      <line-chart
        v-if="data.type == 'line'"
        :data="data.data"
        :xtitle="data.settings.xtitle"
        :ytitle="data.settings.ytitle"
        :colors="data.settings.colors"
        :legend="data.settings.legend"
        :suffix="data.settings.suffix"
        :precision="data.settings.precision"
      />
      <pie-chart
        v-if="data.type == 'pie'"
        :data="data.data"
        :donut="true"
        :xtitle="data.settings.xtitle"
        :ytitle="data.settings.ytitle"
        :colors="data.settings.colors"
        :legend="data.settings.legend"
        :suffix="data.settings.suffix"
        :precision="data.settings.precision"
         :dataset="{borderWidth: 0}"
      />
      <column-chart
        v-if="data.type == 'column'"
        :data="data.data"
        :xtitle="data.settings.xtitle"
        :ytitle="data.settings.ytitle"
        :colors="data.settings.colors"
        :legend="data.settings.legend"
        :suffix="data.settings.suffix"
        :precision="data.settings.precision"
      ></column-chart>
    </v-card-text>
    <v-list-item two-line>
      <v-list-item-content class="pt-0">
        <v-list-item-title class="headline mb-1">
          {{ data.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ data.subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
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
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>