# Render Queue
In Txxxxxxx, rendering (asynchronous) happens all the time. Render queue should work with VDS (validity descriptor system).

```
 OUT
  |
+-----------+
|   |   |   |
+-----------+
          |
        INPUT
```
### Event Order

## API
<details>
  <summary>single_render</summary>
  
  ```ts
  declare function single_render(set: any, option: { diff: boolean }): Promise<void>;
  ```
</details>
