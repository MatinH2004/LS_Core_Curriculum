# Debugging With Pry

## What is debugging?
* Bugs are human errors in code
* Debugging is the process of identifying and fixing those errors

## Debugging Steps
1. Identify the problem
2. Understand the problem
3. Implement a solution

### Types of error
1. Syntax Errors
  * The code you have written does not conform to the grammar of the programming language you are using
  * Generally stops your code from functioning

2. Logical Errors
  * Errors in the logic of your code
  * Code generally runs, but produces unexpected results

## Debugging Tools w/ Pry
* Type 'pry' command in Terminal to run the pry REPL
* You can enter ruby collections by running `cd 'collection name here'`
* You can see what method are available to this object by running `ls` command
* To exit out of object: `cd ..`
* To go back into last object: `cd -`
* Go to top-level scope: `cd /`

## What is pry?
* Pry is a RubyGem
* Pry is a REPL: Read-Evaluate-Print-Loop
  * Takes user input
  * Evaluates the input
  * Returns the results to the user
  * Loops back to the start

## Using pry
* Changing scope with `cd`
* Learn about context with `ls`
* Call methods directly within context (No need to type object name, just method name)
* Access documentation with `show-doc` (if doesn't work use `show-source`)

## Invoking pry at runtime
* Using `binding.pry`
  * A `binding` is something that contains references to any variable that were in scope at the point where it was created.
  * `pry` interrupts program execution and _**pries open**_ the binding so that we can have a look around
* To view what part of the program you are run `whereami x`
  * optional argument `x`: to output x number of lines below and above where you are in the program

## Stepping through and into code
* `pry-byebug`
* Extends `pry` with additional commands
  * next
  * step
  * continue
* Similar gems exist such as `pry-nav` and `pry-debugger`
* The concept of stepping through and into code is not limited to `pry` or Ruby
* Need to `require 'pry-byebug'`
* There are equivalents in other languages, such as Chrome Dev Tools Debugger

## Take-aways
* Debugging is an important skill to learn and practice
* Tools such as pry and pry-byebug make debugging easier
* Using these tools also help to learn more about code
* These debugging concepts are not limited to Ruby

## Troubleshooting
**If you have problems using `show-doc`**

Ruby and PRy are changing the way they work in some cases. If you are unable to use `show-doc` to display the `cycles` documentation, try the following. Start from your bash or zsh shell:

```zsh
# From bash or zsh
gem install pry-gem
gem install pry-doc
pry
```

From `pry`:
```zsh
require 'pry-gem'
gem-install pry-doc
show-doc Array#cycle
```

The `show-doc` command output may mention that `show-doc` is deprecated. You can use the following command instead:
```zsh
show-source Array#cycle -d
```