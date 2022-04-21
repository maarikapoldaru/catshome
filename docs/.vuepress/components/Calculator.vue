<template>
  <form>
    <div class="form-row">
      <label class="form-item">{{ catWeightLabel }}</label>
      <input class="form-item" type="text" id="weight" v-model="cat.weight" />
    </div>
    <div class="form-row">
      <label class="form-item">{{ catAgeLabel }}</label>
      <input class="form-item" type="text" id="age" v-model="cat.age" />
    </div>

    <hr class="resultSeperator" />

    <div class="form-row">
      <label class="form-item">{{ catOwnershipCostLabel }}</label>
      <label class="form-item result">{{ catOwnershipCost }}</label>
    </div>
  </form>
</template>

<script async defer>
import Vue from "vue";

Vue.config.productionTip = false;

export default {
  name: "CatOwnershipCalculator", // Can you really own a cat?
  data() {
    return {
      cat: {
        age: "",
        weight: "",
      },
      local: {
        "et-EE": {
          age: "Sisesta kassi vanus",
          weight: "Sisesta kassi kaal",
          result: "Kassi omamise kuluks on",
          errors: {
            result: "Sisestage kassi andmed",
          },
        },
        "en-US": {
          age: "Enter cat's age",
          weight: "Enter cat's weight",
          result: "Cat ownership cost is",
          errors: {
            result: "Enter information about the cat",
          },
        },
      },
      weightUnit: "kg",
    };
  },
  computed: {
    catAgeLabel: function () {
      const localeLabel = this.local[this.$lang]?.age || this.local["et-EE"].age;
      return `${localeLabel}:`;
    },
    catWeightLabel: function () {
      const localeLabel = this.local[this.$lang]?.weight || this.local["et-EE"].weight;
      return `${localeLabel}:`;
    },
    catOwnershipCostLabel: function () {
      const localeLabel = this.local[this.$lang]?.result || this.local["et-EE"].result;
      return `${localeLabel}:`;
    },
    catOwnershipCost: function () {
      const age = Number(this.cat.age);
      const weight = Number(this.cat.weight);
      if (!age || !weight) {
        const localeLabel = this.local[this.$lang].errors.result || this.local["et-EE"].errors.result;
        return localeLabel;
      }

      const result = weight * 5 + (weight * age) / 10;
      return `${result}€`; // Eeldan, et asi €
    },
  },

  methods: {},
};
</script>

<style scoped>
.form-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 1em;
  margin-top: 5px;
  margin-bottom: 5px;
}

.form-item {
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
}

.result {
  border: 1px solid;
  border-radius: 5px;
  text-align: center;
}

.resultSeperator {
  border: 0;
  height: 2px;
  margin-right: 13%;
  background-image: linear-gradient(to right, transparent, #ccc, transparent);
}
</style>
