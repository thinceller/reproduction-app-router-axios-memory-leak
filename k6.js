import { check, sleep } from "k6";
import http from "k6/http";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 50,
  // A string specifying the total duration of the test run.
  duration: "30m",
};

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function () {
  const res = http.get("http://localhost:3001");
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
