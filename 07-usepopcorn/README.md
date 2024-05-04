# Thinking IN React: Components, Composition, and Reusability

### Component size matters

We should not go for too small or too large components.
Large component:

- Either a component has too much going on
- it recieves too many components
- Hard to reuse

Small component:

- 100s of mini-components
- confusing codebase
- too abstract

### How to split UI into Components?

4 Criteria:

- Logical Separation of content/layout
- Reusability
- Responsibilities/Complexity
- Personal Coding Style

Thumb Rule: "When in doubt, start with a relatively big component, then split it into smaller components as it becomes necessary"

### Framework: When to create a new component?

- Does the component contain pieces of content or layout that don't belong together?
- Is it possible to reuse part of the component?
- Do you want or need to reuse it?
- Is the component doing too many different things?
- Does the component rely on too many props?
- Does the component have too many pieces of state or effects?
- Is the code, including JSX, too complex or confusing?
- Do you prefer smaller function/components?

#### If the answer is yes to any of the above questions: You might need a new component.

### Guidelines:

Adding a new component creates a new abstraction. Abstractions have a cost, because, more abstractions require more mental energy to switch back and forth between components. So try not to create new components too early.

Name a component according to what it is does or what it displays. Don't be afraid of using long component names.

Never declare a new component inside another component!

co-locate related components inside the same file/folder (when working in industry).

It's completely normal that an app has components of many different sizes, including very small and huge one's.

We ofcourse need some small components which are less complex and highly reusable. And a few huge components, which are not reusable (NOT a problem)
