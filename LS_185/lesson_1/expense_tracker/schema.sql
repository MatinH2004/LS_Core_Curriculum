CREATE TABLE expenses (
  id serial PRIMARY KEY,
  amount numeric(6,2) NOT NULL,
  memo text NOT NULL,
  created_on date NOT NULL DEFAULT NOW(),
  CONSTRAINT positive_amount CHECK (amount >= 0.01)
);