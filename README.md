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

## Disordered

## Ordered

```
   VD_QUEUE
+-----------+
|   |   |   |
+-----------+
  |
render
  |
+-----------+
|   |   |   |
+-----------+
  READY_QUEUE
```

## API
<details>
  <summary>single_render</summary>
  
  ```ts
  declare function single_render(set: any, option: { diff: boolean }): Promise<void>;
  ```
</details>

 <details>
  <summary>READY_ITEM</summary>
  
  ```ts
  declare interface READY_ITEM {
   // ...
   _$vd: number | string;
   // ...
  };
  ```
</details>
