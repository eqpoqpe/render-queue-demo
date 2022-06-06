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

## API
### render()
<details>
  <summary>Type</summary>
  
  ```ts
  ```
</details>

- `ordered`

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

- `disordered`

```
```

### single_render()

<details>
  <summary>Type</summary>
  
  ```ts
  declare function single_render(set: any, option: { diff: boolean }): Promise<void>;
  ```
</details>

### READY_ITEM
 
<details>
 <summary>Type</summary>
 
 ```ts
 declare interface READY_ITEM {
  // ...
  _$vd: number | string;
  // ...
 };
 ```
</details>
