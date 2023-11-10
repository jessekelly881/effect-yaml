# Effect yaml

Effect helpers for working with yaml files.

```ts
import { parseYaml } from "effect-yaml";
import { Schema, Parser } from "@effect/schema";

const parse = Schema.string.pipe(parseYaml, Parser.parseSync);
```
