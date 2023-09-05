# Basic Testing

## Minitest

**Test Suite:** Entire set of tests that accompanies your program.
**Test:** A situation or context in which tests are run. A test can contain multiple assertions.
**Assertion:** The verification step to confirm that the data returned by your program is indeed what is expected.

```ruby
require 'minitest/autorun'

require_relative 'car'

class CarTest < Minitest::Test
  def test_wheels
    car = Car.new
    assert_equal(4, car.wheels)
  end
end
```

- `require 'minitest/autorun'` loads all necessary files from `minitest` gem.
- The test suite must subclass from `Minitest::Test` to inherit the necessary methods for writing tests.
- Start writing tests by creating instance methods that start with **test_**
- Within our tests, we make assertions to verify a specific part of our program is working

### Test Output

`.` = test passed
`F` = test failed
`S` = test skipped

### Summary

- Minitest is an intuitive test library. It comes installed with Ruby.
- Using Minitest is very easy, and you shouldn't be afraid to play around with it.
- Create a test file
- Create a test class by subclassing Minitest::Test.
- Create a test by creating an instance method that starts with test_.
- Create assertions with assert_equal, and pass it the expected value and the actual value.
- Colorize Minitest output with minitest-reporters
- You can skip tests with skip (and pass in a message).
- Minitest comes in two syntax flavors: assertion style and expectation style. The latter is to appease RSpec users, but the former is far more intuitive for beginning Ruby developers.

## Assertions

**assert(test)**	Fails unless test is truthy.
**assert_equal(exp, act)**	Fails unless exp == act.
**assert_nil(obj)**	Fails unless obj is nil.
**assert_raises(*exp) { ... }**	Fails unless block raises one of *exp.
**assert_instance_of(cls, obj)**	Fails unless obj is an instance of cls.
**assert_includes(collection, obj)**	Fails unless collection includes obj.

### Refutations

Refutation are the opposite of assertions. They refute rather than assert. They are rarely used.

List of refutations: `refute`, `refute_equal`, `refute_nil`, etc...

## SEAT Approach

1. Set up necessary objects
2. Execute the code against the object we're testing
3. Assert that the executed code did the right thing.
4. Tear down and clean up any lingering artifacts.

Instead of instantiating the objects in every test, we can define a `setup` method to do this for us.

```ruby
  def setup
    @car = Car.new
  end
```

We can also define a `teardown` method for cleaning up files or logging some information, or closing database connections.

The `setup` and the `teardown` methods will be run before and after every test, respectively.

## Testing Equality

- `assert_equal` tests for value equality (==)
- `assert_same` tests if two objects are the same

In custom classes, the `==` method has to be defined to check for equality.

## Code Coverage

Code coverage is the percentage of our program that is tested by a test suite.

- make sure all public/private methods are tested for 100% code coverage
- code coverage is one metric that you can use to gauge code quality
- It isn't necessary to get 100% coverage depending on the project

### Using `simplecov`

Install the `simplecov` gem and include the following at top of code file:

```ruby
require 'simplecov'
SimpleCov.start
```

Open `index.html` in `coverage` directory to see code coverage.

## Summary

- Minitest is Ruby's default testing library. It comes installed with Ruby.
- Minitest tests come in 2 flavors: assert-style and spec-style. Unless you really like RSpec, use assert-style.
- A test suite contains many tests. A test can contain many assertions.
- Use assert_equal liberally, but don't be afraid to look up other assertions when necessary. Remember that assert_equal is for asserting value equality as determined by the == method.
- Use the SEAT approach to writing tests.
- Use code coverage as a metric to gauge test quality. (But not the only metric.)
- Practice writing tests -- it's easy!