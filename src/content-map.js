// Generated content map for the Advanced JavaScript MDX corpus.
// Routes are keys; each route lists page metadata and every fenced code snippet.

export const projectContentMap = {
  "/": {
    "title": "JavaScript Interview Snippets and Job Tasks",
    "description": "Practice JavaScript interview snippets and real job-task examples covering async code, arrays, React, closures, and core language behavior.",
    "source": "src/content/index.mdx",
    "snippets": [
      {
        "title": "Promise Resolution Order",
        "description": "Covers the Promise Resolution Order snippet from the JavaScript Interview Snippets and Job Tasks page."
      },
      {
        "title": "Event Loop",
        "description": "Covers the Event Loop snippet from the JavaScript Interview Snippets and Job Tasks page."
      }
    ]
  },
  "/get-started": {
    "title": "Advanced JavaScript Topic Map",
    "description": "Navigate Advanced JavaScript lessons by topic, including arrays, promises, React, algorithms, language behavior, and utility patterns.",
    "source": "src/content/get-started.mdx",
    "snippets": []
  },
  "/graph-algorithms/graph-traversal": {
    "title": "JavaScript Graph Traversal with DFS and BFS",
    "description": "Learn DFS and BFS graph traversal in JavaScript with directed and undirected path examples using adjacency lists.",
    "source": "src/content/graph-algorithms/graph-traversal.mdx",
    "snippets": [
      {
        "title": "Has Path",
        "description": "Determines whether a path exists between two nodes in a directed graph.  Includes both Depth-First Search (DFS) and Breadth-First Search (BFS) implementations."
      },
      {
        "title": "Undirected Path",
        "description": "Checks if a path exists between two nodes in an undirected graph, using DFS with a visited set to avoid cycles."
      }
    ]
  },
  "/js-native/map-ds": {
    "title": "JavaScript Map, WeakMap, and Map.groupBy",
    "description": "Learn Map, WeakMap, object keys, SameValueZero, and Map.groupBy with practical JavaScript examples.",
    "suggestedRoute": "/js-native/map-and-weakmap",
    "structureNote": "The content is coherent, but the current route name is abbreviated. A route that names Map and WeakMap would be clearer.",
    "source": "src/content/js-native/map-ds.mdx",
    "snippets": [
      {
        "title": "Map",
        "description": "The Map object holds key-value pairs and remembers the original insertion order of the keys.  Keys can be any value, including objects, functions, and NaN."
      },
      {
        "title": "WeakMap",
        "description": "The WeakMap object is a special kind of map whose keys must be objects, and those keys are weakly referenced — meaning they do not prevent garbage collection."
      },
      {
        "title": "Map.groupBy",
        "description": "The Map. groupBy() static method groups elements from an iterable based on the return value of a callback function."
      }
    ]
  },
  "/js-native/mutating-methods": {
    "title": "JavaScript Array Method Polyfills",
    "description": "Recreate JavaScript array methods like push, pop, splice, fill, reverse, concat, and unshift to understand native behavior.",
    "source": "src/content/js-native/mutating-methods.mdx",
    "snippets": [
      {
        "title": "Concat",
        "description": "The concat() method merges two or more arrays and returns a new array without modifying the original.  It also handles non-array values by appending them as-is."
      },
      {
        "title": "Fill",
        "description": "The fill() method changes all elements in an array between the specified start and end indices to a static value, in place.  It returns the modified array and is useful for quic..."
      },
      {
        "title": "Pop",
        "description": "The pop() method removes the last element from an array and returns it.  It mutates the original array by reducing its length by one."
      },
      {
        "title": "Push",
        "description": "The push() method adds one or more elements to the end of an array and returns the new length of the array.  It's a common and efficient way to grow an array in-place."
      },
      {
        "title": "Reverse",
        "description": "The reverse() method reverses an array in place and returns the modified array.  The first element becomes the last, and the last becomes the first, effectively reversing the ar..."
      },
      {
        "title": "Shift",
        "description": "The shift() method removes the first element from an array and returns it, shifting the remaining elements down.  This method mutates the array by reducing its length."
      },
      {
        "title": "Unshift",
        "description": "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."
      },
      {
        "title": "Splice",
        "description": "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place."
      }
    ]
  },
  "/js-native/promises": {
    "title": "JavaScript Promise Method Polyfills",
    "description": "Recreate Promise.all, Promise.race, Promise.any, and Promise.allSettled to understand JavaScript async behavior.",
    "source": "src/content/js-native/promises.mdx",
    "snippets": [
      {
        "title": "Promise.All",
        "description": "Covers the Promise.All snippet from the JavaScript Promise Method Polyfills page."
      },
      {
        "title": "Promise.AllSettled",
        "description": "The Promise. allSettled() method returns a promise that resolves after all promises in the input iterable have settled, regardless of whether they were fulfilled or rejected."
      },
      {
        "title": "Promise.Any",
        "description": "The Promise. any() method returns a promise that fulfills as soon as any of the input promises is fulfilled."
      },
      {
        "title": "Promise.Race",
        "description": "The Promise. race() method returns a promise that settles as soon as the first input promise settles — whether it fulfills or rejects."
      }
    ]
  },
  "/js-native/read-only-methods": {
    "title": "JavaScript Array Read Method Polyfills",
    "description": "Implement JavaScript array methods like find, findIndex, at, every, includes, indexOf, and some with focused examples.",
    "source": "src/content/js-native/read-only-methods.mdx",
    "snippets": [
      {
        "title": "Find",
        "description": "The find method returns the first element in the array that satisfies the provided testing function.  If no match is found, it returns undefined."
      },
      {
        "title": "FindIndex",
        "description": "The findIndex() method returns the index of the first element that passes the provided test function.  If no element matches, it returns -1."
      },
      {
        "title": "FindLast",
        "description": "The findLast() method iterates the array in reverse and returns the first value that satisfies the given condition.  If no element matches, undefined is returned."
      },
      {
        "title": "At",
        "description": "The at() method takes an integer and returns the item at that index — supporting both positive and negative integers.  Negative values count from the end of the array, making it..."
      },
      {
        "title": "Every",
        "description": "The every() method tests whether all elements in an array pass the test implemented by the provided callback.  It returns a boolean — true if all elements satisfy the condition,..."
      },
      {
        "title": "Includes",
        "description": "The includes() method checks if an array contains a specific value, returning true or false.  It uses the SameValueZero equality comparison — meaning it treats NaN as equal to NaN."
      },
      {
        "title": "IndexOf",
        "description": "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.  It uses strict equality (===) for comparison and su..."
      },
      {
        "title": "Some",
        "description": "The some() method tests whether at least one element in the array passes the test implemented by the provided function.  It returns true if any element satisfies the condition;..."
      }
    ]
  },
  "/js-native/set-and-object": {
    "title": "JavaScript Set and Object Utility Methods",
    "description": "Learn JavaScript Set behavior, Object.groupBy, Object.assign, and Array.entries with practical examples.",
    "suggestedRoute": "/js-native/set-object-and-entries",
    "structureNote": "Set and Object.groupBy/Object.assign fit together as collection utilities, but Array.entries makes the page slightly broader than the route name suggests.",
    "source": "src/content/js-native/set-and-object.mdx",
    "snippets": [
      {
        "title": "Set",
        "description": "The Set object lets you store unique values of any type, whether primitive or object references.  A Set automatically removes duplicate elements and maintains the insertion order."
      },
      {
        "title": "Object.groupBy",
        "description": "The Object. groupBy() static method groups elements of an iterable based on the string key returned by a callback function."
      },
      {
        "title": "Object.assign",
        "description": "The Object. assign() method copies all enumerable own properties from one or more source objects to a target object."
      },
      {
        "title": "Array.entries",
        "description": "The entries() method returns a new array iterator object containing [index, value] pairs for each element.  It works well in for."
      }
    ]
  },
  "/js-native/transform-methods": {
    "title": "JavaScript Array Transform Method Polyfills",
    "description": "Recreate map, filter, flat, flatMap, join, reduce, and slice to understand JavaScript array transformation methods.",
    "source": "src/content/js-native/transform-methods.mdx",
    "snippets": [
      {
        "title": "Filter",
        "description": "The filter() method creates a shallow copy of an array, including only elements that pass the test implemented by the provided callback function.  It’s ideal for narrowing down..."
      },
      {
        "title": "Flat",
        "description": "The flat() method creates a new array with all sub-array elements recursively flattened up to the specified depth.  It's useful for simplifying nested arrays into a single-level..."
      },
      {
        "title": "FlatMap",
        "description": "The flatMap() method first maps each element using a given callback function, then flattens the result by one level.  It behaves like array."
      },
      {
        "title": "Join",
        "description": "The join() method creates and returns a string by concatenating all elements of an array, separated by a specified string (default is a comma).  If the array has only one item,..."
      },
      {
        "title": "Map",
        "description": "Covers the Map snippet from the JavaScript Array Transform Method Polyfills page."
      },
      {
        "title": "Reduce",
        "description": "The method can accept an optional initial value.  If no initial value is provided, the first array element becomes the accumulator and iteration starts at the second element."
      },
      {
        "title": "Slice",
        "description": "The slice() method returns a shallow copy of a portion of an array into a new array, without modifying the original array.  The selection is made from start index to end index (..."
      }
    ]
  },
  "/learn-js-and-mdn/advanced-patterns": {
    "title": "JavaScript Memoization, Proxies, and Mixins",
    "description": "Learn JavaScript memoization, mixins, promise chaining, error handling, Proxy behavior, iterators, and closure patterns.",
    "suggestedRoute": "/learn-js-and-mdn/memoization-proxies-and-mixins",
    "structureNote": "This page is useful, but it mixes several advanced concepts. The title is clearer than the route, so a more explicit route would help.",
    "source": "src/content/learn-js-and-mdn/advanced-patterns.mdx",
    "snippets": [
      {
        "title": "Memoize",
        "description": "The wrapper stores results in a Map.  JSON."
      },
      {
        "title": "Mixins",
        "description": "Covers the Mixins snippet from the JavaScript Memoization, Proxies, and Mixins page."
      },
      {
        "title": "Promise Chaining",
        "description": "Each . then() receives the value returned by the previous step."
      },
      {
        "title": "Rethrow Error",
        "description": "Promise chains catch errors that are thrown synchronously inside the chain.  Errors thrown later from a timer are outside that chain unless you convert them into a rejection."
      },
      {
        "title": "Handling Errors",
        "description": "Promises automatically catch synchronous errors thrown inside the executor.  However, errors thrown asynchronously (e."
      },
      {
        "title": "Proxy",
        "description": "A Proxy can intercept fundamental object operations.  Here it intercepts property reads: known phrases return translations, and unknown phrases fall back to the original key."
      },
      {
        "title": "Lexical Environment(Scope)",
        "description": "Covers the Lexical Environment(Scope) snippet from the JavaScript Memoization, Proxies, and Mixins page."
      }
    ]
  },
  "/learn-js-and-mdn/async-and-timers": {
    "title": "JavaScript Debounce, Throttle, and Timers",
    "description": "Learn JavaScript delay decorators, debounce, throttle, setTimeout, and setInterval with practical timing examples.",
    "suggestedRoute": "/learn-js-and-mdn/debounce-throttle-and-timers",
    "structureNote": "The content is coherent around timing helpers. The suggested route names the strongest search terms directly.",
    "source": "src/content/learn-js-and-mdn/async-and-timers.mdx",
    "snippets": [
      {
        "title": "Delay Decorator",
        "description": "It preserves this with Function. prototype."
      },
      {
        "title": "Delay And This",
        "description": "For object methods, Function. prototype."
      },
      {
        "title": "SetInterval",
        "description": "Covers the SetInterval snippet from the JavaScript Debounce, Throttle, and Timers page."
      },
      {
        "title": "SetTimeout",
        "description": "Covers the SetTimeout snippet from the JavaScript Debounce, Throttle, and Timers page."
      },
      {
        "title": "Debounce",
        "description": "Covers the Debounce snippet from the JavaScript Debounce, Throttle, and Timers page."
      },
      {
        "title": "Throttle",
        "description": "Covers the Throttle snippet from the JavaScript Debounce, Throttle, and Timers page."
      }
    ]
  },
  "/learn-js-and-mdn/core-concepts": {
    "title": "JavaScript Core Concepts - this, bind, loops",
    "description": "Practice JavaScript this binding, bind, loop behavior, object-to-map conversion, async generators, and Fibonacci examples.",
    "suggestedRoute": "/learn-js-and-mdn/javascript-core-puzzles",
    "structureNote": "This is a grab-bag page: this, loops, object conversion, bind, async generators, and Fibonacci do not form one narrow topic. It works better as a puzzle collection than a concept page.",
    "source": "src/content/learn-js-and-mdn/core-concepts.mdx",
    "snippets": [
      {
        "title": "This",
        "description": "Covers the This snippet from the JavaScript Core Concepts - this, bind, loops page."
      },
      {
        "title": "For Vs While",
        "description": "++i increments before the condition is checked.  i++ increments after the old value is used in the condition."
      },
      {
        "title": "Object To Map",
        "description": "Use Object. entries() to turn an object into key/value pairs, and Object."
      },
      {
        "title": "Bind",
        "description": "Covers the Bind snippet from the JavaScript Core Concepts - this, bind, loops page."
      },
      {
        "title": "Async Generator",
        "description": "for await. of consumes the sequence one value at a time, which is the same pattern used for streams and controlled async iteration."
      },
      {
        "title": "Fibonacci",
        "description": "Efficient and suitable for large values of n (like 77).  Uses a loop and keeps track of the last two values."
      },
      {
        "title": "Fibonacci Recursive",
        "description": "Compact, but inefficient for large n because it repeats the same calculations many times.  Use it to understand recursion, not for performance."
      }
    ]
  },
  "/learn-js-and-mdn/event-loop": {
    "title": "JavaScript Event Loop and Microtasks",
    "description": "Learn JavaScript event loop order with Promises, microtasks, macrotasks, async and await, setTimeout, and requestAnimationFrame.",
    "source": "src/content/learn-js-and-mdn/event-loop.mdx",
    "snippets": [
      {
        "title": "Promise.All And The Event Loop",
        "description": "Promise. all resolves when all input promises (or values) are fulfilled."
      },
      {
        "title": "Promise Chaining And Microtask Queue Order",
        "description": "Even though promise1 and promise2 are resolved immediately, their . then() callbacks are placed in the microtask queue."
      },
      {
        "title": "Let In Loops With SetTimeout",
        "description": "Covers the Let In Loops With SetTimeout snippet from the JavaScript Event Loop and Microtasks page."
      },
      {
        "title": "Promise Lifecycle And Event Loop Timing",
        "description": "Covers the Promise Lifecycle And Event Loop Timing snippet from the JavaScript Event Loop and Microtasks page."
      },
      {
        "title": "Async Function And Timer Execution Order",
        "description": "Even when using await, async functions execute their synchronous parts immediately.  This snippet highlights how setTimeout callbacks are deferred to the macrotask queue, while..."
      },
      {
        "title": "Blocking The Event Loop With A While Loop",
        "description": "This snippet shows that synchronous code can block the event loop.  Even though setTimeout is set to execute after 500ms, the callback is delayed until the loop finishes—after r..."
      },
      {
        "title": "Script, Microtasks, And Macrotasks In Execution Order",
        "description": "Synchronous code runs first, then microtasks such as . then() and queueMicrotask(), then macrotasks such as setTimeout()."
      },
      {
        "title": "Blocking Inside Async Callbacks",
        "description": "Even though the task is scheduled with setTimeout, once it begins, the long-running synchronous task blocks the event loop.  JavaScript still runs the callback on the main threa..."
      },
      {
        "title": "Nested Microtasks In Macrotasks",
        "description": "Microtasks (like . then()) always run before macrotasks (setTimeout)."
      },
      {
        "title": "RequestAnimationFrame And Task Ordering",
        "description": "This snippet compares setTimeout, promises, and requestAnimationFrame.  Microtasks (."
      }
    ]
  },
  "/learn-js-and-mdn/object-methods": {
    "title": "JavaScript this in Object Methods",
    "description": "See how JavaScript this behaves in object methods, arrow functions, async callbacks, call, classes, and prototype methods.",
    "suggestedRoute": "/learn-js-and-mdn/this-in-object-methods",
    "structureNote": "The page is coherent and should keep focusing on this binding. The route could be more explicit for search and scanning.",
    "source": "src/content/learn-js-and-mdn/object-methods.mdx",
    "snippets": [
      {
        "title": "Object Method This Binding",
        "description": "Shows how this is resolved when an object method is called through the object versus when the method is detached."
      },
      {
        "title": "Accessing User Directly Inside A Method",
        "description": "Avoid directly referencing the object (user) inside its own method.  If the object is reassigned or removed, the method will throw an error."
      },
      {
        "title": "Arrow Vs Regular Function And This",
        "description": "Arrow functions don’t have their own this — they inherit it from the surrounding scope.  In contrast, regular functions define their own this, which can lead to unexpected undef..."
      },
      {
        "title": "This In Object Literals Vs Methods",
        "description": "When returning an object from a function, this does not refer to the object being created — it refers to the function's execution context.  To correctly reference the object its..."
      },
      {
        "title": "Method Chaining With This",
        "description": "By returning this from each method, you enable method chaining — a clean and expressive way to perform multiple operations on the same object in sequence."
      },
      {
        "title": "This In Regular Vs Arrow Methods",
        "description": "Regular functions bind this to the object they belong to, while arrow functions inherit this from the outer scope — which may lead to unexpected undefined or NaN values when use..."
      },
      {
        "title": "Preserving This In Async Callbacks",
        "description": "In asynchronous functions like setTimeout, regular functions lose their this binding.  Arrow functions capture this from their lexical scope, making them ideal for preserving co..."
      },
      {
        "title": "Arrow Functions Preserve Context",
        "description": "Arrow functions retain the this value from where they were defined.  Even when the method is detached from the object, it still correctly references this."
      },
      {
        "title": "Regular Functions Lose This When Detached",
        "description": "Regular functions bind this dynamically at call time.  When a method is called standalone (detached from its object), this becomes undefined (in strict mode), leading to unexpec..."
      },
      {
        "title": "Call With Regular Vs Arrow Functions",
        "description": "Regular functions can have their this explicitly set using . call()."
      },
      {
        "title": "Arrow Function Captures Outer This",
        "description": "Covers the Arrow Function Captures Outer This snippet from the JavaScript this in Object Methods page."
      },
      {
        "title": "This In Class Methods: Regular Vs Arrow",
        "description": "In class instances, regular methods lose this when detached, while arrow functions preserve the class context.  Arrow methods defined as properties are especially useful when pa..."
      },
      {
        "title": "Inheriting Methods With Object.Create",
        "description": "Using Object. create(), you can create an object that inherits from another."
      }
    ]
  },
  "/lodash/array-helpers": {
    "title": "Lodash chunk, compact, and partition in JavaScript",
    "description": "Recreate Lodash chunk, compact, and partition utilities in plain JavaScript with simple array examples.",
    "source": "src/content/lodash/array-helpers.mdx",
    "snippets": [
      {
        "title": "Chunk",
        "description": "The implementation uses the current index to decide which chunk each item belongs to."
      },
      {
        "title": "Compact",
        "description": "The implementation is intentionally short because Boolean already expresses the predicate."
      },
      {
        "title": "Partition",
        "description": "The . partition() method splits an array into two groups based on a predicate function."
      }
    ]
  },
  "/lodash/difference-and-intersection": {
    "title": "Lodash difference, intersection, and union",
    "description": "Recreate Lodash difference, differenceBy, intersection, and union using JavaScript arrays and Set-based utilities.",
    "source": "src/content/lodash/difference-and-intersection.mdx",
    "snippets": [
      {
        "title": "Difference",
        "description": "The . difference() method returns the elements from the first array that are not present in any of the other arrays provided."
      },
      {
        "title": "DifferenceBy",
        "description": "The . differenceBy() method works like difference(), but allows you to compare elements by a specific property or transformation function."
      },
      {
        "title": "Intersection",
        "description": "The . intersection() method computes the intersection of two or more arrays."
      },
      {
        "title": "Union",
        "description": "The . union() method creates a new array of unique values by combining all given arrays, preserving the order of elements."
      }
    ]
  },
  "/lodash/sets-and-objects": {
    "title": "Lodash Object Utilities in JavaScript",
    "description": "Recreate Lodash keyBy, omit, orderBy, pick, and curry in vanilla JavaScript with object and array examples.",
    "source": "src/content/lodash/sets-and-objects.mdx",
    "snippets": [
      {
        "title": "KeyBy",
        "description": "The . keyBy() method creates an object composed of keys generated from the results of running each element in the collection through an iteratee function."
      },
      {
        "title": "Omit",
        "description": "The . omit() method creates a shallow copy of an object without the specified properties."
      },
      {
        "title": "OrderBy",
        "description": "The . orderBy() method sorts an array of objects based on one property."
      },
      {
        "title": "Pick",
        "description": "The . pick() method creates a new object by picking the specified properties from an existing object."
      },
      {
        "title": "Curry",
        "description": "The implementation keeps collecting arguments until it has enough to call the original function."
      }
    ]
  },
  "/react/rendering": {
    "title": "React usePrevious and children Rendering",
    "description": "Learn the React usePrevious hook, children rendering behavior, and why React can reuse component instances.",
    "source": "src/content/react/rendering.mdx",
    "snippets": [
      {
        "title": "UsePrevious",
        "description": "usePrevious keeps a value in a ref and updates that ref after render.  During the next render, the ref still contains the previous committed value, so the component can compare..."
      },
      {
        "title": "Children",
        "description": "children are values passed into a component.  In this example, TestComponent is created before TestWrapper updates its own state."
      }
    ]
  },
  "/react/state": {
    "title": "React Normalized State and useReducer Patterns",
    "description": "Learn React normalized state and useReducer patterns with recursive state updates and TypeScript reducer examples.",
    "source": "src/content/react/state.mdx",
    "snippets": [
      {
        "title": "Normalized State",
        "description": "Normalized state stores entities by id and keeps relationships as id arrays.  Instead of walking a deeply nested tree on every update, the code can update one record and adjust..."
      },
      {
        "title": "UseReducer",
        "description": "useReducer is useful when state changes are easier to describe as actions than as isolated setter calls.  A reducer receives the current state and an action, then returns the ne..."
      }
    ]
  },
  "/system-design/redux-and-twitter": {
    "title": "Redux Store and Twitter Feed in JavaScript",
    "description": "Build a vanilla JavaScript Redux store and Twitter-style feed with dispatch, actions, follow, unfollow, and news feed logic.",
    "source": "src/content/system-design/redux-and-twitter.mdx",
    "snippets": [
      {
        "title": "Redux Pattern",
        "description": "The store keeps state private, exposes getState(), and changes state only through dispatch(action).  A reducer receives the previous state and an action, then returns the next s..."
      },
      {
        "title": "Twitter",
        "description": "A small feed system needs three pieces of state: who follows whom, which tweets belong to each user, and a timestamp so the feed can be sorted by recency."
      }
    ]
  },
  "/system-design/stack-and-queue": {
    "title": "JavaScript Queue and Stack Patterns",
    "description": "Learn queue, stack, async queue, and stack-based palindrome examples in JavaScript for interviews and data structures.",
    "source": "src/content/system-design/stack-and-queue.mdx",
    "snippets": [
      {
        "title": "Async Queue",
        "description": "AsyncQueue stores functions, not already-running promises.  That distinction matters: each task starts only after the previous task has resolved, so the result order follows the..."
      },
      {
        "title": "Queue",
        "description": "A queue follows FIFO: first in, first out.  New values are added to the back, and dequeue() removes from the front."
      },
      {
        "title": "Stack Palindrome",
        "description": "A stack reverses order because the last value pushed is the first one popped.  The palindrome check uses that property to rebuild the word backward and compare it with the origi..."
      },
      {
        "title": "Stack",
        "description": "A stack follows LIFO: last in, first out.  push() adds to the top, pop() removes from the top, and peek() reads the current top without removing it."
      }
    ]
  },
  "/theory/composition-vs-inheritance": {
    "title": "JavaScript Composition vs Inheritance",
    "description": "Compare composition and inheritance in JavaScript with examples for function composition, classes, and call stack behavior.",
    "suggestedRoute": "/theory/composition-vs-inheritance",
    "structureNote": "Composition and inheritance fit the route well. The function stack snippet is useful, but it is a side topic and could move to a separate execution-model page later.",
    "source": "src/content/theory/composition-vs-inheritance.mdx",
    "snippets": [
      {
        "title": "Composition",
        "description": "Covers the Composition snippet from the JavaScript Composition vs Inheritance page."
      },
      {
        "title": "Inheritance",
        "description": "Inheritance reuses behavior through a parent/child relationship.  The child class can call parent behavior with super and override pieces that need to change."
      },
      {
        "title": "Recursive Function Stack",
        "description": "1.  Return from foo(-1) - Stack: [foo(2), foo(1), foo(0)]."
      }
    ]
  },
  "/theory/solid-react": {
    "title": "SOLID Principles in React",
    "description": "Learn SOLID principles in React with practical TypeScript examples for single responsibility, open-closed, Liskov, interfaces, and dependency inversion.",
    "suggestedRoute": "/theory/solid-principles-react",
    "structureNote": "The route and content are aligned. The snippet labels should spell out the SOLID principle names instead of only using letters.",
    "source": "src/content/theory/solid-react.mdx",
    "snippets": [
      {
        "title": "Single Responsibility Principle",
        "description": "Avoid components that render unrelated UI and own unrelated state.  In the example, the user card and edit dialog state are split so each component has a clearer job."
      },
      {
        "title": "Open Closed Principle",
        "description": "The first component hard-codes every supported color as a new boolean prop.  Adding a color requires editing the component."
      },
      {
        "title": "Liskov Substitution Principle",
        "description": "A styled wrapper should still accept the behavior callers expect from the original button.  If FancyIconButton2 forwards normal IconButtonProps, it can be used anywhere an IconB..."
      },
      {
        "title": "Interface Segregation Principle",
        "description": "Do not force one component contract to include every possible event.  Smaller prop interfaces make components easier to reuse and harder to misuse."
      },
      {
        "title": "Dependency Inversion Principle",
        "description": "The UI should not need to know whether authentication comes from Firebase, local storage, or another service.  It should depend on an AuthProvider interface and receive the impl..."
      }
    ]
  },
  "/theory/type-conversions": {
    "title": "JavaScript Type Conversion and Coercion",
    "description": "Learn JavaScript type coercion with plus, minus, comparisons, equality, null, undefined, strings, booleans, and tricky conversion examples.",
    "source": "src/content/theory/type-conversions.mdx",
    "snippets": [
      {
        "title": "Plus",
        "description": "+ performs string concatenation if either side becomes a string.  Otherwise it performs numeric addition."
      },
      {
        "title": "Minus",
        "description": "- is numeric only, so both sides are converted to numbers."
      },
      {
        "title": "Comparisons",
        "description": "Relational comparisons usually convert mixed types to numbers, except string-to-string comparisons, which compare lexicographically."
      },
      {
        "title": "== And ===",
        "description": "Strict equality (===) does not coerce values.  Loose equality (==) does, which is why examples with null, undefined, false, 0, and \"\" need extra care."
      },
      {
        "title": "Random Conversions",
        "description": "Covers the Random Conversions snippet from the JavaScript Type Conversion and Coercion page."
      }
    ]
  },
  "/various/dictionary-of-nested": {
    "title": "Convert Nested Arrays to a JavaScript Dictionary",
    "description": "Convert deeply nested JavaScript arrays into object dictionaries for fast lookup, traversal, and category data access.",
    "suggestedRoute": "/various/nested-array-to-dictionary",
    "structureNote": "The route is understandable, but a verb-based route would better match the transformation performed by the snippets.",
    "source": "src/content/various/dictionary-of-nested.mdx",
    "snippets": [
      {
        "title": "Fixed-Depth Nested Dictionary",
        "description": "Covers the Dictionary Of Nested snippet from the Convert Nested Arrays to a JavaScript Dictionary page."
      },
      {
        "title": "Recursive Nested Dictionary",
        "description": "The recursive version removes the hard-coded category/subcategory levels.  Pass the output keys for each level, and the helper builds the same lookup shape from any compatible n..."
      },
      {
        "title": "Typed Nested Dictionary",
        "description": "The TypeScript version makes the expected structure explicit.  This is helpful when the dictionary is passed between components or shared with state-management code."
      }
    ]
  },
  "/various/group-list-by-quarters": {
    "title": "Group JavaScript Data by Quarter",
    "description": "Group monthly financial data by calendar quarter in JavaScript for dashboards, reports, charting, and tax datasets.",
    "source": "src/content/various/group-list-by-quarters.mdx",
    "snippets": [
      {
        "title": "GroupDataByQuarter",
        "description": "1.  groupDataByQuarter(data) organizes report rows into keys like \"2023-Q1\" based on the date field."
      }
    ]
  },
  "/various/list-to-tree": {
    "title": "Convert JavaScript Lists to Trees",
    "description": "Convert flat JavaScript lists into trees, flatten nested items, and transform category data into lookup-friendly structures.",
    "source": "src/content/various/list-to-tree.mdx",
    "snippets": [
      {
        "title": "ListToTree",
        "description": "This utility transforms a flat list of items with id and parentId fields into a nested tree.  A Map stores every node by id first, then the second pass attaches each node to its..."
      },
      {
        "title": "FlatNested",
        "description": "This transformation turns deeply nested category data into a flat array where each item keeps the names of its parent subcategory and category."
      }
    ]
  },
  "/various/sorting": {
    "title": "JavaScript Sorting Algorithms",
    "description": "Learn Bubble Sort, Insertion Sort, and Selection Sort in JavaScript with custom implementations and explanations.",
    "source": "src/content/various/sorting.mdx",
    "snippets": [
      {
        "title": "Bubble Sort",
        "description": "bubbleSort() sorts an array by repeatedly stepping through the list, comparing adjacent items, and swapping them if they are in the wrong order.  This process is repeated until..."
      },
      {
        "title": "Insertion Sort",
        "description": "insertionSort() sorts an array by repeatedly picking the next element and inserting it into the correct position within the already sorted portion of the array.  It builds the s..."
      },
      {
        "title": "Selection Sort",
        "description": "selectionSort() sorts an array by repeatedly finding the smallest element from the unsorted part and swapping it with the element at the current position.  It iterates through t..."
      }
    ]
  },
  "/various/utils": {
    "title": "Common JavaScript Utility Functions",
    "description": "Learn practical JavaScript utilities like clsx, deepClone, retry, topological sort, filterMap, innerJoin, and reducer patterns.",
    "suggestedRoute": "/various/javascript-utility-functions",
    "structureNote": "This is intentionally broad. It works as a utility catalog, but several snippets could become stronger standalone pages if the project later expands.",
    "source": "src/content/various/utils.mdx",
    "snippets": [
      {
        "title": "Clsx",
        "description": "clsx builds a class-name string from mixed inputs.  It is useful when UI state decides which classes should be present."
      },
      {
        "title": "ContainsDuplicate",
        "description": "Covers the ContainsDuplicate snippet from the Common JavaScript Utility Functions page."
      },
      {
        "title": "DeepClone",
        "description": "This version is meant for JSON-compatible data.  It does not handle special object types like Date, Map, Set, or circular references."
      },
      {
        "title": "Filter By Related",
        "description": "This utility filters a list by looking up related data from another list.  It is the array equivalent of joining tables and then filtering by a field from the joined record."
      },
      {
        "title": "FilterMap",
        "description": "filterMap() combines filtering and mapping in one reduce() pass.  Use it when each kept item should also be transformed."
      },
      {
        "title": "InnerJoin",
        "description": "This is a small innerJoin for arrays.  It keeps records that match at least one value from another list according to a predicate."
      },
      {
        "title": "Reducer",
        "description": "This reducer handles task actions (added, changed, deleted) and returns the next task list for each action.  Applying a list of actions with Array."
      },
      {
        "title": "FetchWithRetry",
        "description": "This helper retries a failing request with a fixed delay between attempts.  If every attempt fails, it throws the final error path explicitly instead of silently returning an in..."
      },
      {
        "title": "Shuffle",
        "description": "This is the Fisher-Yates shuffle, a reliable way to randomize an array in place.  The algorithm works by iterating the array from the end to the beginning, swapping the current..."
      },
      {
        "title": "Topological Sort",
        "description": "This is a topological sort for items with dependencies.  Each item can appear in the result only after its dependencies have already been added."
      }
    ]
  }
};

export const projectContentMapStats = {
  "routes": 29,
  "snippets": 135
};
