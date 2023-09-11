=begin

Write your own custom implementation of a set
A set is a unique set of elements that can be
manipulated in several different ways.

Methods to implement:
- empty?
- contains?(elem)

- subset?(other CustomSet obj)
  - return true if self is a subset of other
  - if self contains no elems => true
  - may need to create protected method

- disjoint?(other CustomSet obj)
  - return false if self and other contain the same elem

- eql?(other CustomSet obj)
  - true if both are instances of same class and contain same elems

- add(int)
   - push int to array unless array already contains the number

- intersection(other CustomSet obj)
  - return a new CustomSet obj with elems that are found in both sets
  - return empty set if no elems are in both sets

- difference(other CustomSet obj)
  - subtract elems of self from other
  - return new CustomSet obj
  - self: [3, 2, 1]; other: [2, 4]; res: [3, 1]

- union(other CustomSet obj)
  - return a new CustomSet obj containing all elems from self and other

=end

class CustomSet
  def initialize(array=[])
    @set = array.uniq
  end

  def empty?
    set.empty?
  end

  def contains?(elem)
    set.include?(elem)
  end

  def eql?(other)
    set.sort == other.set.sort
  end

  def ==(other)
    set == other.set
  end

  def subset?(other)
    set.all? { |elem| other.contains?(elem) } || empty?
  end

  def disjoint?(other)
    !set.any? { |elem| other.contains?(elem) }
  end


  def add(elem)
    set.push(elem) unless contains?(elem)
    self
  end

  def intersection(other)
    result = set.select { |elem| other.contains?(elem) }
    self.class.new(result)
  end

  def difference(other)
    self.class.new(set - other.set)
  end

  def union(other)
    self.class.new((set + other.set).sort.uniq)
  end

  protected
  attr_reader :set
end
