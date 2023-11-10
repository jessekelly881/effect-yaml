---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Options (type alias)](#options-type-alias)
  - [ParseYaml](#parseyaml)
  - [parseYaml](#parseyaml-1)

---

# utils

## Options (type alias)

**Signature**

```ts
export type Options = {
  reviver?: Parameters<typeof YAML.parse>[1]
  replacer?: Parameters<typeof YAML.stringify>[1]
}
```

Added in v1.0.0

## ParseYaml

**Signature**

```ts
export declare const ParseYaml: Schema.Schema<string, unknown>
```

Added in v1.0.0

## parseYaml

**Signature**

```ts
export declare const parseYaml: <I, A extends string>(
  self: Schema.Schema<I, A>,
  options?: Options
) => Schema.Schema<I, unknown>
```

Added in v1.0.0
