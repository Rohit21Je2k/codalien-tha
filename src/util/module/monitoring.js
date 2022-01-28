import { useStoreContext } from "../Context/StoreContext";

export const monitoring = () => {
  const store = useStoreContext();
  let time = 10_000;
  console.log(time);
  const timer = setInterval(() => {
    for (const obj in store.urls) {
      // 10secs
      if (time % (10 * 1000) === 0) {
      }

      // 1mins
      if (time % (60 * 1000) === 0) {
      }

      // 5mins
      if (time % (300 * 1000) === 0) {
      }

      // 10mins
      if (time % (600 * 1000) === 0) {
      }

      // 15mins
      if (time % (900 * 1000) === 0) {
      }

      // 1hr
      if (time % (3600 * 1000) === 0) {
      }

      // 4hrs
      if (time % (14400 * 1000) === 0) {
      }

      // 6hrs
      if (time % (21600 * 1000) === 0) {
      }

      // Daily
      if (time % (86400 * 1000) === 0) {
      }
    }
    time += 10_000;
  }, [10000]);
};
