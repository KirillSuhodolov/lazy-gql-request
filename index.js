import { GraphQLClient, gql } from 'graphql-request'

export const runRequest = (runQuery) => async (q, ...args) => {
  const { query, mutation, variables, extendVariablesKeys } = q

  return await runQuery(
    gql`
      ${query || mutation}
    `,
    extendVariablesKeys(variables(...args))
  )
}

export const runQuery = (url, options) => async (query, variables) => {
  const client = new GraphQLClient(url, options)

  return await client.request(query, variables)
}

export const request = (url, options) => runRequest(runQuery(url, options))
