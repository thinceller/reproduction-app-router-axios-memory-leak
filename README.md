# reproduction-app-router-axios-memory-leak

## Prerequisites

- Node.js
  - `>=20.18`
- [k6](https://github.com/grafana/k6)

## How to reproduce

```sh
# run the app
$ pnpm install
$ pnpm start

# run the k6 script in another terminal
$ k6 run k6.js
```
