# Practice Problems: Url Components

### Given the following URL:
```https://amazon.com/Double-Stainless-Commercial-Refrigerator/B60HON32?ie=UTF8&qid=142952676&sr=93&keywords=commercial+fridge```

1. Identify the **host**:
  - `amazon.com`

2. Identify the **names** of the **query parameters**:
  - `ie`, `qid`, `sr` & `keywords`

3. Identify the **values** of the **query parameters**:
  - `UTF8`, `14295267`, `93`, & `commercial+fridge`

4. Identidy the **scheme**:
  - `https`

5. Identify the **path**:
  - `/Double-Stainless-Commercial-Refrigerator/B60HON32`

6. Identify the **ports**:
  - URL does not contain a port. Port 443 is used by default.

### Add the port 3000 to the following URL:
```http://amazon.com/products/B60HON32?qid=142952676&sr=93```

- `http://amazon.com:3000/products/B60HON32?qid=142952676&sr=93`

### Given the following URL:
```http://localhost:4567/todos/15```

1. Identify the **query parameters**:
  - URL does not contain query parameters

2. Identify the **scheme**:
  - `http`

3. Identify the **path**:
  - `/todos/15`

4. Identify the **host**:
  - `localhost`

5. Identify the **port**:
  - `4567`

### What are two different ways to encode a space in a query parameter?

- `%20` or `+`

### What character indicates the beginning of a URL's query parameters?

- `?` indicates the beginning of query parameters

### What character is used between the name and value of a query parameter?

- `=`

### What character is used between multiple query parameters?

- `&`