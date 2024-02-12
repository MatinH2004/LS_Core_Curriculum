# LS180 - PostgreSQL Notes

### Vocabulary
- **Relational Database**: A structured collection of data that follows the relational model.
- **RDBMS**: Relational Database Management System. A software application for managing relational databases, such as PostgreSQL.
- **Relation**: A set of individual but related data entries; analogous to a database table.
- **SQL**: a special-purpose, declarative language used to manipulate the structure and values of datasets stored in a relational database.
- **SQL Statement**: A SQL command used to access/use the database or the data within that database via the SQL language.
- **SQL query**: A subset of a "SQL Statement". A query is a way to search, or lookup data within a database, as opposed to updating or changing data.

## Interacting with to PostgreSQL
- Open with: `$ psql postgres` or `$ psql -d db_name`
- Issue meta-commands using `\`

### Terminal Commands
- Create db: `$ createdb`
- Delete db: `$ dropdb`
- Db dump: `$ pg_dump database_name > dump_file.sql`
- Import SQL file: `$ psql -d db_name < filename.sql`

### Meta-commands
- Quit postgres `\q`
- Check connection info `\conninfo`
- Check all tables in db `\dt`
- Check table in db `\d table_name`
- See all dbs `\list` or `\l`
- Connect to db `\c` or `\connect`

### SQL Sub-languages
- `DDL`: Data Definition Language. Used to define the structure of a database and the tables and columns within it.
  - `CREATE`, `DROP`, `ALTER`
- `DML`: Data Manipulation Language. Used to retrieve or modify data stored in a database. SELECT queries are part of DML.
  - `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- `DCL`: Data Control Language. Used to determine what various users are allowed to do when interacting with a database.
  - `GRANT`, `REVOKE`

## Schema

### Database Commands
- `CREATE DATABASE db_name;`
- `DROP DATABASE db_name;`

Create relation:
```SQL
CREATE TABLE table_name (
    column_1_name column_1_data_type [constraints, ...],
    column_2_name column_2_data_type [constraints, ...],
    .
    .
    .
    constraints
);

-- Example

CREATE TABLE users (
       id serial UNIQUE NOT NULL,
       username char(25),
       enabled boolean DEFAULT TRUE
);
```

### Data Types
**Required for columns**
- `serial`: auto-incrementing integer value
- `char(N)`: string up to N chars, remaining space filled with space
- `varchar(N)`: string up to N chars, remaining length isn't used
- `boolean`: true / false, t / f
- `integer / int`: whole numbers
- `decimal(precision, scale)`: precision = total numbers, scale = number of decimal numbers
- `timestamp`: YYYY-MM-DD HH:MM:SS format
- `date`: YYYY-MM-DD format
- `NULL`: absent or unknown value
    - use `IS NULL` & `IS NOT NULL` for comparison
    - use `=` for assignment

[sql data types](./02_Schema_Data_SQL/sql_data_types.png)

### Constraints
**Optional for columns**
- `UNIQUE`: prevents duplicate values
- `NOT NULL`: value must be present
- `DEFAULT`: sets the column to the specified default value

### Alter Table
```SQL
ALTER TABLE table_to_change
    stuff_to_change_goes_here
    additional_arguments
```

**Renaming a table**
```SQL
ALTER TABLE users
      RENAME TO all_users;
```

**Renaming a column**
```SQL
ALTER TABLE all_users
      RENAME COLUMN username TO full_name;
```

**Alter column data type**
```SQL
ALTER TABLE all_users
      ALTER COLUMN full_name TYPE varchar(25);
```

**Add column constraint**
```SQL
ALTER TABLE table_name
      ALTER COLUMN column_name
      SET NOT NULL;

-- Add unique constraint

ALTER TABLE animals
  ADD CONSTRAINT unique_binomial_name UNIQUE
  (binomial_name);

ALTER TABLE birds ADD CONSTRAINT check_age CHECK (age > 0);

-- ADD CHECK CONSTRAINT

ALTER TABLE birds ADD CHECK (age > 0);
```

**Add more constraints to an existing table**
```SQL
ALTER TABLE table_name
      ADD [ CONSTRAINT constraint_name ]
      constraint_clause;
```

**Removing a table constraint**
```sql
ALTER TABLE table_name
      DROP CONSTRAINT constraint_name;

-- Removing a column constraint

ALTER TABLE all_users
      ALTER COLUMN id
      DROP DEFAULT;

ALTER TABLE all_users
      ALTER COLUMN id
      DROP NOT NULL;
```

### Adding/Removing a Column
We add a new column the same way we create them.
```sql
ALTER TABLE all_users
      ADD COLUMN last_login timestamp
                 NOT NULL
                 DEFAULT NOW();
```

```sql
ALTER TABLE all_users DROP COLUMN enabled;
```

### Drop Table
```sql
DROP TABLE all_users;
```

## Data
Add data to tables using INSERT
```sql
INSERT INTO users (column1, column2, column3)
      VALUES (data_for_col_1, data_for_col_2, DEFAULT);

-- The specified default value for column3 is inserted
```

### ORDER BY
Fine tune table order by adding additional column names.
```sql
SELECT full_name, enabled FROM users
      ORDER BY enabled DESC, id DESC;
```

### GROUP BY
Groups data together in queries. Helpful when using aggregate data.
```sql
SELECT enabled, count(id) FROM users GROUP BY enabled;
```

### LIMIT & OFFSET
Limits the the result by N amount of rows.

Offset will skip the first N amount of rows.

### DISTINCT
Will return unique values.

### UPDATE
We can update existing rows like so:
```sql
UPDATE table_name
SET column_name = value, ...
WHERE expression;
```

This action overrites current data and isn't reversible

We can use `WHERE` clauses to target rows.
```sql
UPDATE users SET full_name='Alice Walker' WHERE id=2;

-- use commas to update multiple rows

UPDATE animals
SET phylum = 'Chordata', kingdom = 'Animalia';
```

### DELETE
This is similar to the `UPDATE` query
```sql
DELETE FROM users
WHERE full_name='Harry Potter' AND id > 3;

-- OR DELETE ALL ROWS

DELETE FROM users
```

with `UPDATE` you can update one or more columns within one or more rows by using the `SET` clause; with `DELETE` you can only delete one or more entire rows, and not particular pieces of data from within those rows.

## Table Relationships

### Normalization
- The reason for normalization is to reduce data redundancy and improve data integrity
- The mechanism for carrying out normalization is arranging data in multiple tables and defining relationships between them
- It is the process of designing schema that minimize or eliminate the possible occurrence of these anomalies. The basic procedure of normalization involves extracting data into additional tables and using foreign keys to tie it back to its associated data.
  - Update anomaly
  - Insertion anomaly
  - Delete anomaly

### Entity Relationship Diagram
An ERD is a graphical representation of entities and their relationships to each other, and is a commonly used tool within database design.

**Types of ERDs**:
  - conceptual
  - logical
  - physical

**Three types of relationships can exist**:
  - One-to-one
  - One-to-many
  - Many-to-many

### Primary Key
- A Primary Key is a unique identifier for a row of data. 
- Making a column a `PRIMARY KEY` is essentially equivalent to adding `NOT NULL` and `UNIQUE` constraints to that column.
- Each table can have only 1 primary key
- Any column can be a primary key, but it's conventional to use the `id` column as the primary key

```sql
ALTER TABLE users ADD PRIMARY KEY (id);
```

### Foreign Key
- A Foreign Key allows us to associate a row in one table to a row in another table. 
- This is done by setting a column in one table as a Foreign Key and having that column reference another table's Primary Key column.

```sql
FOREIGN KEY (fk_col_name)
REFERENCES target_table_name (pk_col_name);

-- ADD FOREIGN KEY TO EXISTING TABLE

ALTER TABLE countries
ADD FOREIGN KEY (continent_id)
REFERENCES continents(id);
```

Defining the keys, during table creation:
```sql
CREATE TABLE addresses (
  user_id int, -- Both a primary and foreign key
  street varchar(30) NOT NULL,
  city varchar(30) NOT NULL,
  state varchar(30) NOT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id)
      REFERENCES users (id)
      ON DELETE CASCADE
);
```
- `ON DELETE CASCADE` basically means that if the row being referenced is deleted, the row referencing it is also deleted.

### Referential Integrity
Referential integrity is the assurance that a column value within a record must reference an existing value; if it doesn't then an error is thrown.
- ensures that when one table references another table the data used to create that relationship remains consistent; for example we wouldn't want a value in a foreign key column if that value does not exist in the primary key column of the table it is referencing.

### Keys
A **key** uniquely identifies a single row in a database table. 

**Natural Key**:
- A natural key is an existing value in a dataset that can be used to uniquely identify each row of data in that dataset. 
- On the surface there appear to be a lot of values that might be satisfactory for this use: a person's phone number, email address, social security number, or a product number

**Surrogate Key**:
- A surrogate key is a value that is created solely for the purpose of identifying a row of data in a database table. Because it is created specifically for that purpose, it can avoid many of the problems associated with natural keys.
- The most common surrogate key in use today is an auto-incrementing integer. This is a value that is added to each row in a table as it is created. With each row, this value increases in order to remain unique in each row.

## SQL Joins
- JOINs are clauses in SQL statements that link two tables together
- There are several types of JOINs: `INNER`, `LEFT OUTER`, `RIGHT OUTER`, `FULL OUTER` and `CROSS`

Syntax of JOIN statement:
```sql
SELECT table_nameN.column_name, ...
       FROM table_name1
       join_type JOIN table_name2
                 ON join_condition;

SELECT * FROM table_1, table_2 WHERE table_1.id = table_2.id;
```

To join one table to another, PostgreSQL needs to know several pieces of information:

- The name of the first table to join
- The type of join to use
- The name of the second table to join
- The join condition.

When you perform a JOIN between two tables, PostgreSQL creates a **transient table** that contains data from both the original table and the table identified by the JOIN

### Types of Joins

**`INNER JOIN`**:
- creates the intersection between the two tables, which means that the join table contains only rows where there is a definite match between the values in the two columns used in the condition.

**`LEFT JOIN`**:
- A LEFT JOIN will always include the rows from the LEFT table, even if there are no matching rows in the table it is JOINed with. When there is no match, the corresponding rows will use NULL to represent the missing values from the second table.

**`RIGHT JOIN`**:
- A RIGHT JOIN is similar to a LEFT JOIN except that the roles between the two tables are reversed, and all the rows on the second table are included along with any matching rows from the first table.

**`FULL JOIN`**:
- A FULL JOIN or FULL OUTER JOIN is essentially a combination of LEFT JOIN and RIGHT JOIN. 
- This type of join contains all of the rows from both of the tables.

**`CROSS JOIN`**:
- the join table of a cross join contains every possible combination of rows from the tables that have been joined.
- Does not have a `ON` clause, since it doesn't need to match rows.

### Joining Multiple Tables
It is possible, and indeed common, to join more than just two tables together. This is done by adding additional JOIN clauses to your SELECT statement.

Syntax:
```sql
SELECT users.full_name, books.title,
       checkouts.checkout_date
    FROM users
    INNER JOIN checkouts
          ON users.id = checkouts.user_id
    INNER JOIN books
          ON books.id = checkouts.book_id;
```

## Aliasing

Aliasing allows us to specify another name for a column or table using `AS` and then use that name in later parts of a query to allow for more concise syntax.

```sql
SELECT u.full_name, b.title, c.checkout_date
       FROM users AS u
       INNER JOIN checkouts AS c
           ON u.id = c.user_id
       INNER JOIN books AS b
           ON b.id = c.book_id;

-- WE CAN ALSO ALIAS WITHOUT USING 'AS'

SELECT u.full_name, b.title, c.checkout_date
       FROM users u
       INNER JOIN checkouts c
           ON u.id = c.user_id
       INNER JOIN books b
           ON b.id = c.book_id;
```

Aliasing isn't just useful for shortening SQL queries. We can also use it to display more meaningful information in our result table.

```sql
SELECT count(id) AS "Number of Books Checked Out"
       FROM checkouts;
```
```
Number of Books Checked Out
-----------------------------
                          4
```

## Database Dumps

### Loading
2 ways to load SQL files to a psql database:
```bash
$ psql -d my_database < file_to_import.sql
```
```
my_database=# \i ~/some/files/file_to_import.sql
```

### Dumping
To dump a table to a SQL file:
```bash
$ pg_dump -d database_name -t table_name --inserts > dump.sql
```

## Database Diagrams

**Conceptual Schema**:
- A high level design focused on identifying entities and their relationships

**Physical Schema**:
- A low level database-specific design focused on implementation

**Cardinality**:
- the number of objects on each side of the relationship (1:1, 1:M, M:M)

**Modality**:
- if the relationship is required (1) or optional (0)
- if required, there has to be at least 1 instance of the entity

## Indexes

PostgreSQL indexes are data structures that help speed up database queries by allowing for efficient retrieval of rows based on the values of specific columns.

- Indexes are best used in cases where sequential reading is inadequate. For example: columns that aid in mapping relationships (such as Foreign Key columns), or columns that are frequently used as part of an ORDER BY clause, are good candidates for indexing.
- They are best used in tables and/ or columns where the data will be read much more frequently than it is created or updated.

```sql
-- Create index:
CREATE INDEX ON table_name (column1, column2);

-- Delete index:
DROP INDEX index_name;

-- Views indexes:
\di
```

Unique indexes ensure that no two rows in a table have the same values for the indexed columns, enforcing uniqueness constraints and preventing duplicate entries, while non-unique indexes allow duplicate values for the indexed columns and are primarily used to enhance query performance by facilitating faster data retrieval.

## Optimizing Queries

### EXPLAIN
In order to execute each query that it receives, PostgreSQL devises an appropriate **query plan**.

Each node consists of the node type (in this case a sequential scan on the items table) along with estimated cost for that node (start-up cost, followed by total cost), the estimated number of rows to be output by the node, and the estimated average width of the rows in bytes.

```
auction=# EXPLAIN SELECT name FROM items
auction-# JOIN bids ON items.id = bids.item_id
auction-# WHERE amount > 100 AND amount < 120;
                                   QUERY PLAN                                    
---------------------------------------------------------------------------------
 Hash Join  (cost=32.75..54.93 rows=8 width=32)
   Hash Cond: (items.id = bids.item_id)
   ->  Seq Scan on items  (cost=0.00..18.80 rows=880 width=36)
   ->  Hash  (cost=32.65..32.65 rows=8 width=4)
         ->  Seq Scan on bids  (cost=0.00..32.65 rows=8 width=4)
               Filter: ((amount > '100'::numeric) AND (amount < '120'::numeric))
(6 rows)

-- First scan costs 18.80
-- Total cost: 54.93
```

### EXPLAIN ANALYZE

- Using `ANALYZE` actually runs the query
- Shows planning & execution time in milliseconds (ms)

```
auction=# EXPLAIN ANALYZE SELECT name FROM items
auction-# JOIN bids ON items.id = bids.item_id
auction-# WHERE amount > 100 AND amount < 120;
                                                QUERY PLAN                                                 
-----------------------------------------------------------------------------------------
 Hash Join  (cost=32.75..54.93 rows=8 width=32) (actual time=0.438..0.442 rows=1 loops=1)
   Hash Cond: (items.id = bids.item_id)
   ->  Seq Scan on items  (cost=0.00..18.80 rows=880 width=36) (actual time=0.017..0.019 rows=6 loops=1)
   ->  Hash  (cost=32.65..32.65 rows=8 width=4) (actual time=0.398..0.398 rows=1 loops=1)
         Buckets: 1024  Batches: 1  Memory Usage: 9kB
         ->  Seq Scan on bids  (cost=0.00..32.65 rows=8 width=4) (actual time=0.016..0.026 rows=1 loops=1)
               Filter: ((amount > '100'::numeric) AND (amount < '120'::numeric))
               Rows Removed by Filter: 25
 Planning Time: 0.410 ms
 Execution Time: 0.491 ms
(10 rows)
```

## Subqueries

- This is called nesting, and the query that is nested is referred to as a subquery.
- there are situations where a subquery can be more efficient than using a join.

```sql
SELECT title FROM books WHERE author_id =
  (SELECT id FROM authors WHERE name = 'William Gibson');  
```

### Subquery Expression
**`=`**:
- we were able to use `=` in the `WHERE` condition in this way because the nested query returned a single value.

**`EXISTS`**:
- EXISTS effectively checks whether any rows at all are returned by the nested query.
- If at least one row is returned then the result of EXISTS is 'true', otherwise it is 'false'.
```
my_books=# SELECT 1 WHERE EXISTS
my_books-#   (SELECT id FROM books
my_books(#     WHERE isbn = '9780316005388');
 ?column?
----------
        1
(1 row)
```

**`IN`**:
- IN compares an evaluated expression to every row in the subquery result.
- If a row equal to the evaluated expression is found, then the result of IN is 'true', otherwise it is 'false'.
```
my_books=# SELECT name FROM authors WHERE id IN
my_books-#   (SELECT author_id FROM books
my_books(#     WHERE title LIKE 'The%');
      name
----------------
 Iain M. Banks
 Philip K. Dick
(2 rows)
```

**`NOT IN`**:
- NOT IN is similar to IN except that the result of NOT IN is 'true' if an equal row is not found, and 'false' otherwise.
```
my_books=# SELECT name FROM authors WHERE id NOT IN
my_books-#   (SELECT author_id FROM books
my_books(#     WHERE title LIKE 'The%');
      name
----------------
 William Gibson
(1 row)
```

**`ANY/SOME`**:
- These expressions are used along with an operator (e.g. =, <, >, etc). 
- The result of ANY / SOME is 'true' if any true result is obtained when the expression to the **left** of the operator is evaluated using that operator against the results of the nested query.
- Note: when the = operator is used with ANY / SOME, this is equivalent to IN.
```
my_books=# SELECT name FROM authors WHERE length(name) > ANY
my_books-# (SELECT length(title) FROM books
my_books(# WHERE title LIKE 'The%');
      name
----------------
 William Gibson
 Philip K. Dick
(2 rows)
```

**`ALL`**:
- As with ANY / SOME, ALL is used along with an operator. 
- The result of ALL is true only if all of the results are true when the expression to the left of the operator is evaluated using that operator against the results of the nested query.
- Note: when the <> / != operator is used with ALL, this is equivalent to NOT IN.
```
my_books=# SELECT name FROM authors WHERE length(name) > ALL
my_books-# (SELECT length(title) FROM books
my_books(# WHERE title LIKE 'The%');
 name
------
(0 rows)
```

When first formulating your queries however, you probably aren't testing them for speed; optimization usually comes as a later step in a project.