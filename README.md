# lazy-gql-request

Support package to make request from [lazy-gql](https://github.com/KirillSuhodolov/lazy-gql)

Dependency is [graphql-request](https://github.com/prisma-labs/graphql-request)

```
import { request } from 'lazy-gql-request'
import { buildInsert, setDataSchema } from 'lazy-gql'

const dataSchema = {
  user: {
    id: { },
    name: { },
    email: { },
  },
}

setDataSchema(dataSchema)

return await request(process.env.URL)(buildInsert('users'), [{
  name: 'random name',
  email: 'random@email',
}])

```
