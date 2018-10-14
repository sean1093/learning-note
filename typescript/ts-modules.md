# Modules

Document for Modules

https://www.typescriptlang.org/docs/handbook/modules.html

## Guidance for structuring modules

<strong>_Export as close to top-level as possible_</strong>

Just as “exporting near the top-level” reduces friction on your module’s consumers, so does introducing a default export. 

<strong>_If you’re only exporting a single class or function, use export default_</strong>

export 的時候盡量減少巢狀的層數，如以下範例：使用 default 讓使用的人不用使用很多 dotting 來找到你的 object。

```js
// MyClass.ts
export default class SomeType {
  constructor() { ... }
}

// MyFunc.ts
export default function getThing() { return "thing"; }

// Consumer.ts
import t from "./MyClass";
import f from "./MyFunc";
let x = new t();
console.log(f());
```

<strong>_If you’re exporting multiple objects, put them all at top-level_</strong>

export 多個物件的時候都放到 top-level 

```js
// MyThings.ts
export class SomeType { /* ... */ }
export function someFunc() { /* ... */ }

// Consumer.ts
import { SomeType, someFunc } from "./MyThings";
let x = new SomeType();
let y = someFunc();
```

<strong>_Use the namespace import pattern if you’re importing a large number of things_</strong>

```js
// MyLargeModule.ts
export class Dog { ... }
export class Cat { ... }
export class Tree { ... }
export class Flower { ... }

// Consumer.ts
import * as myLargeModule from "./MyLargeModule.ts";
let x = new myLargeModule.Dog();
```

### Re-export to extend

https://www.typescriptlang.org/docs/handbook/modules.html#re-export-to-extend

