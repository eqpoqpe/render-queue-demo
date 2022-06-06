# Render Queue
In Txxxxxxx, rendering (asynchronous) happens all the time.

```
 OUT
  |
+-----------+
|   |   |   |
+-----------+
          |
        INPUT
```

## API
<details>
  <summary>single_render</summary>
  
  ```ts
  declare function single_render(set: any, option: { diff: boolean }): Promise<void>;
  ```
</details>
