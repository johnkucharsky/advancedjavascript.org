# Agent Context

This file was requested as persistent context for future work on the Advanced JavaScript project.

Project goal:
- Keep users on the site longer.
- Favor interview-style, real-job, challenge-first snippets.
- Preserve existing app/content behavior unless the user explicitly asks for edits.

Current audit:
- Main report: `content-retention-audit.md`
- Scope: `src/content/**/*.mdx`
- Snapshot from 2026-05-08: 31 MDX pages, 151 fenced snippets.

Important user preferences:
- Do not start the dev server unless explicitly requested.
- Running a production build is enough when verification is needed.
- Use Yarn for build commands in this workspace.
- Do not change lesson content during audits unless requested.
- When asked to improve existing snippets, keep scope tight: do not add pages, do not add new snippet blocks, and do not implement new functionality unless explicitly requested.

Recent content fixes:
- `src/content/js-native/mutating-methods.mdx`: clarified that `concat` is non-mutating, changed the page wording from only mutating methods to array methods, renamed the `unshift` example to `customUnshift`, fixed the `unshift` code fence label, and fixed the `customSplice` example using the wrong array length.
- `src/content/various/utils.mdx`: corrected `deepClone` claims, made `hasOwnProperty` safer, guarded missing grouped classes, renamed retry from exponential backoff to fixed delay, made shuffle output an example, and added a topological-sort cycle guard.
- `src/content/various/group-list-by-quarters.mdx`: removed the `date-fns` dependency from the snippet and used local `getQuarter`/`parseISO` helpers.
- `src/content/learn-js-and-mdn/advanced-patterns.mdx`: fixed `range iterator` filename typo.
- `src/content/various/sorting.mdx`: fixed `insertion sort` filename typo.
- `src/content/index.mdx`, `src/content/get-started.mdx`, `src/content/js-native/promises.mdx`, `src/content/theory/solid-react.mdx`, and `src/content/lodash/sets-and-objects.mdx`: fixed casing, wording, and overclaims.

Verification:
- `yarn.cmd build` passed after the content-fix pass.
- The only build warning was the existing Next.js `experimental.turbo` deprecation.
- Content inventory stayed at 31 MDX files and 151 fenced snippets after the fixes.

Encoding note:
- Source files are UTF-8. PowerShell can render emoji/dashes as mojibake in terminal output, so do not bulk-rewrite encoding unless the source or browser-rendered page actually contains broken characters.

Remaining high-value content direction:
- Convert key pages from snippet catalogs into challenge/reveal learning flows when the user permits structural content improvements.
- Add expected outputs, edge cases, complexity notes, and follow-up challenges when adding or rewriting snippets is allowed.
- Prioritize missing high-retention topics such as Promise pool, EventEmitter, LRU cache, custom bind/call/new, React render puzzles, and DOM event delegation when new content is allowed.

Current known caveat:
- `package.json`, `yarn.lock`, `.yarn/`, `.yarnrc.yml`, and `src/app/layout.jsx` have unrelated working-tree changes from earlier work. Do not revert them unless the user asks.
