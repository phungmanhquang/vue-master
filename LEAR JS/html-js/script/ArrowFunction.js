function classicCallback() {
  console.log('classicCallback() run');
}

const arrowCallback = () => {
  console.log('arrowCallback() run');
}

document.addEventListener('click', classicCallback)

async function registerPeriodicNewsCheck() {
  console.log('running');
  const registration = await navigator.serviceWorker.ready;
  console.log("registration ", registration);
  try {
    await registration.periodicSync.register("get-latest-news", {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log("Periodic Sync could not be registered!");
  }
}

registerPeriodicNewsCheck()