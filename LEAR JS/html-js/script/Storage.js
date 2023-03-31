const btnSaveData = document.getElementById('btn_save_data')
btnSaveData.addEventListener('click', () => {
  sessionStorage.setItem("key", "value");
  localStorage.setItem("key", "value");
})

window.onstorage = function(e) {
  console.log('window.onstorage ::: ', e);
}