import Vue from "vue";

Vue.filter("currency", (val) => {
  const currency = parseFloat(val).toFixed(2);
  return currency + " $";
});
