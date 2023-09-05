# The Ruby Toolbox

## Setting Up The Project Directory

1. Initialize `git` repo
2. Connect to a remote repo on Github
3. Create `lib` directory for Ruby source files
4. Create `test` directory for test code

## Setting Up The Gemfile

Create a `Gemfile` in your project's top level directory

The `Gemfile` needs 4 peices of info:
 - Where should Bundler look for Rubygems it needs to install?
 - Do you need a `.gemspec` file?
 - What version of Ruby does your program need?
 - What Rubygems does your program use?

Add all the gems you are using to the `Gemfile`
Run `bundle install`

```ruby
source 'https://rubygems.org'

ruby '3.1.0'

gem 'minitest', '~> 5.10'
gem 'minitest-reporters', '~> 1.1'
```

`~> 5.10` tells bundler that we want a version of at least 5.10 of minitest, but prior to version 6.0

Must be using the same Ruby version as the Gemfile.

After running `bundle install` a `Gemfile.lock` file is created showing all dependancy info for your app:

```
GEM
  remote: https://rubygems.org/
  specs:
    ansi (1.5.0)
    builder (3.2.4)
    minitest (5.14.0)
    minitest-reporters (1.4.2)
      ansi
      builder
      minitest (>= 5.0)
      ruby-progressbar
    ruby-progressbar (1.10.1)

PLATFORMS
  ruby

DEPENDENCIES
  minitest (~> 5.10)
  minitest-reporters (~> 1.1)

RUBY VERSION
   ruby 3.1.0

BUNDLED WITH
   2.1.4
```

When `Gemfile` is update, and `bundle install` is ran, `Gemfile.lock` is updated.

**Important:** Add `require 'bundler/setup'` to all main program files before any other `require` statements

## Adding Another Gem

To add another gem, add gem name and version to `Gemfile` and run `bundle install`.

Ex.

```ruby
# ... rest of file omitted

gem 'minitest-reporters', '~> 1.1'
gem 'stamp', '~> 0.6'
```
```
$ bundle install
```

## Setting Up The Rakefile

Add `gem 'rake'` to `Gemfile`
Run `bundle install`

### Rakefile Syntax

```ruby
desc 'Say hello'
task :hello do
  puts "Hello there. This is the 'hello' task."
end
```

Show list of tasks:
  - `bundle exec rake -T`
Run a certain task:
  - `bundle exec rake task_name`
Run all tasks:
  - `bundle exec rake`

### Running Tests

```ruby
desc 'Run tests'
task :test do
  sh 'ruby ./test/todolist_project_test.rb'
end
```

`$ bundle exec rake test`

### Standard Tests

To run multiple test files at once:

```ruby
require "rake/testtask"

desc 'Say hello'
task :hello do
  puts "Hello there. This is the 'hello' task."
end

desc 'Run tests'
task :default => :test

Rake::TestTask.new(:test) do |t|
  t.libs << "test"
  t.libs << "lib"
  t.test_files = FileList['test/**/*_test.rb']
end
```

The code in the `Rake::TestTask.new` block tells `rake/testtask` that your tests and source code reside in the `test` and `lib` directories, and that all your test files reside in the `test` directory, and have a name that ends with `_test.rb`. When you run `bundle exec rake test` now, `rake/testtask` will load and run all the `*_test.rb` files it can find in the `test` directory or any of its subdirectories.

[Rake Documentation](https://ruby.github.io/rake/)

Finally, a `Rakefile` is not required for every project. It is only for automating simple tasks.

## Preparing A Rubygem

When your project is ready for distribution, investigate the requirements for Rubygems. The steps include:

- Read the documentation.
- Prepare any additional directories that you need.
- Prepare a `README.md` file.
- Write documentation if necessary.
- Prepare your `.gemspec` file. Note that the actual `.gemspec` file has a name like `project.gemspec`, where "project" is your project name. See below for an example `.gemspec`.
- Add a `gemspec` statement to your `Gemfile`.
- Modify your `Rakefile` to include the standard Rubygem tasks.

### Simple `.gemspec`

`todolist.gemspec`:
```ruby
Gem::Specification.new do |s|
  s.name        = 'todolist_project'
  s.version     = '1.0.0'
  s.summary     = 'Todo List Manager!'
  s.description = 'This is a simple todo list manager!'
  s.authors     = ['Pete Williams']
  s.email       = 'pw@example.com'
  s.homepage    = 'http://example.com/todolist_project'
  s.files       = ['lib/todolist_project.rb', 'test/todolist_project_test.rb']
end
```

### Modify `Rakefile`

`require "bundler/gem_tasks"`

## Summary

- Rubygems provide a library of code that you can download and run or use directly inside your Ruby programs. You use the gem command to manage the Gems you need.
- Rubygems also provide the mechanisms you need to release your own Gems, which can either be packages of code you require into your Ruby programs, or independent Ruby programs that you can run (eg, the bundle program from the Bundler gem).
- Ruby projects usually use the Rubygems format.
- Ruby Version Managers help you manage multiple versions of Ruby on a single system. Each Ruby version has its own set of tools such as the gem and bundle commands.
- Bundler provides the tools you need to describe the dependencies for your Ruby programs. This makes it easy to distribute your program to other systems: Bundler installs all the necessary components, and even ensures that the program uses the correct version of each Gem.
- Rake provides a way to easily manage and run repetitive tasks that a developer needs when working on a project.
- The .gemspec file provides information about a Gem. If you decide to release a program or library as a Gem, you must include a .gemspec file.