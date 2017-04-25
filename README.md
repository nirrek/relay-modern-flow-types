```bash
# 1. install dependencies
yarn

# 2. Run flow to verify we aren't getting the errors we should be
# This line shouldn't type check https://github.com/nirrek/relay-modern-flow-types/blob/master/index.js#L12
yarn flow

# 3. Use type-at-pos to verify the type is being reported as (unknown)
yarn flow -- type-at-pos index.js 11 7
