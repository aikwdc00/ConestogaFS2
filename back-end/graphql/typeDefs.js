import { readFile } from 'node:fs/promises'

const typeDefs = await readFile('./schema.graphql', 'utf8')

export default typeDefs