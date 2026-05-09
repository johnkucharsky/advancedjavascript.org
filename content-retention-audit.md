# Content Retention Audit

Audit date: 2026-05-07

Scope: `src/content/**/*.mdx`

Snapshot:
- 29 MDX content pages
- 135 fenced code snippets
- Main content paths currently include `various`, not `utils`
- No lesson content was changed for this audit

## Executive Findings

1. Fix mojibake before adding more content.

   A quick scan found common UTF-8/Windows-1252 mojibake patterns in 29 of 31 MDX files. This affects headings, dashes, apostrophes, and emoji-style section labels. It is a trust and retention problem because users see broken text before they judge the code quality.

2. The site has strong raw material, but many pages read like a snippet catalog.

   The content is useful, but the common pattern is: short intro, code block, output comment. That works for search traffic, but it does not maximize session length. Users need a reason to pause, guess, reveal, compare, and continue.

3. The highest-retention format should be "challenge first, explanation second."

   For interview-style content, lead with:
   - What will this output?
   - Try to answer before opening the explanation.
   - Reveal answer.
   - Why it happens.
   - One edge-case variant.
   - One related next snippet.

4. Several examples are useful but too basic for an "advanced JavaScript" promise.

   Basic `Map`, `Set`, `Queue`, `Stack`, simple sorting, and small Lodash clones are fine as foundations, but they need harder variants or real-world wrappers to keep advanced readers.

5. Some snippets need accuracy or expectation cleanup.

   The biggest issues are taxonomy mistakes, overclaims, and examples that omit edge cases. Examples:
   - `Array.concat` is listed under mutating methods even though it is non-mutating.
   - The `Array.unshift` snippet overwrites native `Array.prototype.unshift` and the code fence filename says `shift`.
   - `deepClone` says it avoids JSON limitations around `Date`, `Map`, `Set`, and circular references, but the implementation only handles primitives, arrays, and plain objects.
   - `fetchWithRetry` is titled exponential backoff, but it retries with a fixed delay.
   - `Topological Sort` can loop forever if the dependency graph has a cycle.
   - `group-list-by-quarters` imports `date-fns`, but the project dependencies do not include `date-fns`.

## Retention Strategy

Use three page templates rather than one generic snippet format.

### Template A: Output Puzzle

Best for event loop, `this`, closures, coercion, promises, React rendering.

Recommended structure:
- Show code without answer.
- Ask "What logs, in order?"
- Hide the answer under a reveal block.
- Explain the mechanism.
- Add a one-line variant that changes the result.
- Link to the next related puzzle.

This should become the default for:
- `learn-js-and-mdn/event-loop.mdx`
- `learn-js-and-mdn/object-methods.mdx`
- `theory/type-conversions.mdx`
- `react/rendering.mdx`

### Template B: Build The Polyfill

Best for native methods, Lodash methods, promises, utilities.

Recommended structure:
- Native behavior summary.
- "First attempt" implementation.
- Hidden tests or visible assert cases.
- Edge cases native handles.
- Final implementation.
- Complexity and pitfalls.

Every polyfill page should include at least:
- Empty input behavior
- Non-promise or non-array values where applicable
- Sparse array behavior for array methods
- `thisArg` behavior where native APIs support it
- Mutation-during-iteration notes where native APIs are tricky

### Template C: Real Job Task

Best for `group-list-by-quarters`, tree/list transformations, dictionary mapping, normalized state, Twitter feed.

Recommended structure:
- Real input
- Desired output
- Constraints
- Naive solution
- Better solution
- Complexity
- Production edge cases
- "Extend it" challenge

This template is likely best for keeping users because it feels closest to actual work.

## Best Current Content

- `learn-js-and-mdn/object-methods.mdx`: high interview relevance. It already has many "why did this happen?" moments.
- `learn-js-and-mdn/event-loop.mdx`: strong topic choice and many output-order examples.
- `js-native/promises.mdx`: useful foundation for async interviews.
- `various/dictionary-of-nested.mdx` and `various/list-to-tree.mdx`: real data transformation tasks, good job-task feel.
- `react/state.mdx`: practical examples, especially normalized state.
- `various/group-list-by-quarters.mdx`: the most real-world business-data task, but it needs to be split and polished.

## Least Sticky Examples

These are not bad, but users are likely to skim them unless they get harder variants:

- `system-design/stack-and-queue.mdx`: basic queue/stack/palindrome examples are common. Add a promise queue with concurrency, cancellation, and retry.
- `various/sorting.mdx`: bubble/insertion/selection sort are standard. Add comparator pitfalls, stability, `Array.sort` gotchas, or visualization counters.
- `lodash/array-helpers.mdx`: `chunk`, `compact`, `partition` are short. Add edge cases and compose them into a real transformation pipeline.
- `js-native/map-ds.mdx`: API demos are useful but feel like MDN. Add `LRUCache`, object-key memoization, and private metadata with `WeakMap`.
- `theory/composition-vs-inheritance.mdx`: composition and inheritance are useful, but the "Function Stack" section feels unrelated and should likely become a recursion/call-stack page.

## Page-by-Page Recommendations

| Page | Recommendation |
| --- | --- |
| `index.mdx` | Strong hook. Add hidden answers for the two opening puzzles and direct links to the exact deeper pages after each answer. |
| `get-started.mdx` | Turn the long TOC into learning tracks: "Start here for interviews", "Native polyfills", "Real job tasks", "React". Fix casing: JavaScript, MDN, GitHub. |
| `graph-algorithms/graph-traversal.mdx` | Add shortest path, connected components, cycle detection, island count/grid traversal, and BFS level-order examples. |
| `js-native/map-ds.mdx` | Replace part of the basic API walkthrough with practical tasks: LRU cache, object-key cache, metadata storage with `WeakMap`, grouping by mutable object identity. |
| `js-native/mutating-methods.mdx` | Move `concat` out of mutating methods. Rename the `unshift` code fence. Do not overwrite native `Array.prototype.unshift`; use `customUnshift`. Add `sort`, `copyWithin`, and mutation edge cases. |
| `js-native/promises.mdx` | Add spec-like edge cases: iterable input, empty input, non-promise values, rejection timing, already-settled promises. Add `promisePool` or concurrency-limited `Promise.all` as a harder follow-up. |
| `js-native/read-only-methods.mdx` | Add sparse-array behavior, `thisArg`, array-like objects, length snapshot behavior, and assertion tests. |
| `js-native/set-and-object.mdx` | Good mixed page, but split basic `Set` API from harder object utilities. Add `Object.create(null)`, property descriptors, symbols, and prototype pollution pitfalls. |
| `js-native/transform-methods.mdx` | Add `reduceRight`, `toSorted`, `toReversed`, `toSpliced`, `with`, `Array.from`, and mutation-during-iteration notes. |
| `learn-js-and-mdn/advanced-patterns.mdx` | Good topic mix. Fix `range itarator`. Add memoize cache invalidation, TTL, WeakMap keys, proxy `set/has/ownKeys`, and iterator protocol explanation. |
| `learn-js-and-mdn/async-and-timers.mdx` | Debounce/throttle should include leading/trailing options, `cancel`, `flush`, return values, and real UI use cases like search, autosave, resize. |
| `learn-js-and-mdn/core-concepts.mdx` | Good but broad. Split unrelated concepts or add a challenge path. Fibonacci should mention safe integer limits and BigInt for large values. |
| `learn-js-and-mdn/event-loop.mdx` | Strong page. Convert each section into a "predict output" block. Add browser vs Node differences: `queueMicrotask`, `process.nextTick`, `setImmediate`, rendering frames, and top-level `await` caveats. |
| `learn-js-and-mdn/object-methods.mdx` | High value but repetitive. Reorder into a progression: direct object reference, method call rules, detached methods, arrow functions, async callbacks, classes, prototypes. Add quizzes before answers. |
| `lodash/array-helpers.mdx` | Add harder cases and real pipelines. Examples: paginate with `chunk`, remove empty form fields with `compact`, split selected/unselected items with `partition`. |
| `lodash/difference-and-intersection.mdx` | Add `differenceWith`, `intersectionBy`, multi-array intersections, object arrays, and performance tradeoffs with `Set`. |
| `lodash/sets-and-objects.mdx` | Add nested path utilities: `get`, `set`, `has`, `merge`, `cloneDeep`, `isEqual`, `once`, `memoize`. Current examples are useful but too shallow for longer sessions. |
| `react/rendering.mdx` | Too small for the topic. Add React Strict Mode double-render notes, `React.memo`, `useCallback`, stale closures, `useEffect` cleanup races, context rerender puzzles, and a "why did this render?" challenge. |
| `react/state.mdx` | Strong direction. Add reducer discriminated unions, undo/redo, optimistic update, normalized entity adapter, and derived selectors. |
| `system-design/redux-and-twitter.mdx` | Good seed. Add event emitter/pub-sub, normalized store, selectors, middleware, feed pagination, heap-based news feed, and time complexity. |
| `system-design/stack-and-queue.mdx` | Basic. Add concurrency queue, priority queue, task scheduler, browser job queue model, and cancellation. |
| `theory/composition-vs-inheritance.mdx` | Move function stack elsewhere. Add React composition patterns, hooks vs inheritance, render props, higher-order components, and before/after refactors. |
| `theory/solid-react.mdx` | Useful but abstract. Make it a mini refactor story: bad component first, then SOLID-guided changes. Add tradeoffs, because SOLID can be over-applied in React. |
| `theory/type-conversions.mdx` | Good candidate for high retention. Make every block a quiz. Add `valueOf`, `toString`, `Symbol.toPrimitive`, object-to-primitive conversion, `Object.is`, and `NaN` traps. |
| `various/dictionary-of-nested.mdx` | Good job-task feel. Add complexity, missing-id behavior, duplicate ids, iterative version, and TypeScript type improvements. |
| `various/group-list-by-quarters.mdx` | High-value real task but too much in one code block. Split into three snippets, add expected input/output before code, explain `date-fns` dependency, and add missing months/sorting/year-boundary edge cases. |
| `various/list-to-tree.mdx` | Strong practical page. Add cycle detection, missing parent handling, stable ordering, and large-list complexity. |
| `various/sorting.mdx` | Too basic for advanced users. Add comparator pitfalls, stable vs unstable sorting, quicksort/mergesort, and "why `Array.sort()` sorts numbers wrong by default". |
| `various/utils.mdx` | Good catalog but mixed quality. Fix `deepClone`, `fetchWithRetry`, and topological-cycle handling. Add `EventEmitter`, `LRUCache`, `memoize`, `deepEqual`, `queryString`, `once`, and `pipe/compose`. |

## Missing High-Retention Topics

Add these as new pages or sections:

- EventEmitter / pub-sub implementation
- LRU cache with `Map`
- Promise pool / concurrency limiter
- Request deduplication cache
- Retry with exponential backoff, jitter, timeout, and abort
- `AbortController` and fetch cancellation
- Custom `new`, `instanceof`, `Object.create`, `call`, `apply`, `bind`
- Prototype chain and property descriptors
- `Symbol.iterator`, custom iterables, generators, async iterables
- `Symbol.toPrimitive`, `valueOf`, `toString`
- Deep equality and clone with circular references
- Query-string parser/stringifier
- Flatten object / unflatten object
- DOM event delegation, capture/bubble, custom events
- Browser storage: localStorage/sessionStorage/cookies pitfalls
- React render puzzles: memoization, effects, stale closures, context rerenders
- Autocomplete system design
- Infinite scroll / virtualized list
- Rate limiter / debounce/throttle production variants
- Scheduler / task runner with priorities
- Heap / priority queue
- Trie / autocomplete
- Binary search, sliding window, two pointers
- Graph cycle detection, shortest path, grid BFS

## Content Quality Rules To Adopt

For every new or rewritten snippet:

- Show expected output.
- Add at least three edge cases.
- Include time and space complexity when algorithmic.
- Avoid modifying native prototypes unless the point is explicitly polyfill behavior.
- If modifying prototypes, use `customX` names and warn that production code should avoid it.
- Prefer runnable snippets with `console.log` plus comments or small `assertEqual` helpers.
- For interview puzzles, hide the answer until after the prompt.
- End with a related next snippet to keep users moving.

## Suggested Priority Order

1. Fix mojibake across MDX files.
2. Convert `event-loop`, `object-methods`, and `type-conversions` into challenge/reveal pages.
3. Fix accuracy issues in `mutating-methods`, `utils`, `promises`, and `group-list-by-quarters`.
4. Add high-retention pages: Promise pool, EventEmitter, LRU cache, custom `new`/`bind`/`call`, React render puzzles.
5. Rework `get-started` into learning tracks with "next" routes.

## Notes For Future Work

The retention goal should not mean adding longer explanations everywhere. The better pattern is more interaction per snippet: prediction, reveal, edge case, and follow-up challenge.
