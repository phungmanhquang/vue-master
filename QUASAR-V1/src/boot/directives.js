import Vue from "vue";

const handlerFormatCurrency = (val) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(val);
};

const FormatCurrency = {
  bind(el) {
    const qFieldContainer = el.getElementsByClassName("q-field__control-container")[0]
    const newInputEl = document.createElement('input')
    const qFieldInputEl = el.getElementsByTagName("input")[0];

    newInputEl.className = "value-display"
    newInputEl.value = handlerFormatCurrency(0)

    qFieldContainer.appendChild(newInputEl)

    qFieldInputEl.style.opacity = '0'
    newInputEl.style.opacity = '1'

    qFieldInputEl.addEventListener("input", (val) => {
      const value = qFieldInputEl.value;
      newInputEl.value = handlerFormatCurrency(value)
    });
    qFieldInputEl.addEventListener("focus", () => {
      qFieldInputEl.style.opacity = '1'
      newInputEl.style.opacity = '0'
    });
    qFieldInputEl.addEventListener("blur", () => {
      qFieldInputEl.style.opacity = '0'
      newInputEl.style.opacity = '1'
    });
  },

  componentUpdated(el) {
    const qFieldInputEl = el.getElementsByTagName("input")[0];
    const newInputEl = el.getElementsByTagName("input")[1];

    newInputEl.value = handlerFormatCurrency(qFieldInputEl.value)
  }
};

Vue.directive("format-currency", FormatCurrency);
