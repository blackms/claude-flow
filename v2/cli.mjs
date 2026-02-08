/**
 * v2 module entrypoint shim.
 *
 * v2 is primarily a CLI package. This file exists to keep the published
 * module contract from pointing at a missing path.
 */

export const deprecated = true;

export const message =
  'claude-flow v2 module import is deprecated; use the CLI binary (`claude-flow`) instead.';

export function getDeprecationNotice() {
  return message;
}

export default {
  deprecated,
  message,
  getDeprecationNotice,
};
