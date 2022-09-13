import { MutationPayload } from 'vuex'

/**
 * Determine whether the current match is based on the status of paths
 */
export function matchPaths(
  paths: string[],
  mutation: MutationPayload
): boolean {
  if (paths.length === 0) {
    return true
  }

  const moduleName = mutation.type.split('/')[0]
  if (!moduleName) {
    return false
  }

  return paths.includes(moduleName)
}
