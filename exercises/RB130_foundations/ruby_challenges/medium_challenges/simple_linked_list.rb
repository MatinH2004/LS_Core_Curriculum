=begin

Create a linked list whose elements may contain numbers 1-10
Provide methods to reverse the list and convert a linked list
to and from an array

CLASS ELEMENT
#datum: returns current element
#tail?: returns bool value if current element is the last in the list
#next: returns next element, or nil

CLASS LINKEDLIST
::from_a: converts array into SimpleLinkedList obj
#size: returns size of list
#empty?: bool value if list is empty or not
#push/pop: add/remove elements to list (first element)
#peek: returns number of elements - nil if no elements
#head: returns element at index 0
#reverse: reverses list
#to_a: converts list to array

=end

class Element
  attr_reader :datum, :next

  def initialize(datum, next_element=nil)
    @datum = datum
    @next = next_element
  end

  def tail?
    @next.nil?
  end
end

class SimpleLinkedList
  attr_reader :head

  def self.from_a(array)
    array = [] if array.nil?

    list = SimpleLinkedList.new
    array.reverse_each { |datum| list.push(datum) }
    list
  end

  def size
    size = 0
    current_elem = @head
    while (current_elem)
      size += 1
      current_elem = current_elem.next
    end
    size
  end

  def empty?
    @head.nil?
  end

  def push(datum)
    element = Element.new(datum, @head)
    @head = element
  end
  
  def pop
    datum = peek
    new_head = @head.next
    @head = new_head
    datum
  end

  def peek
    @head.datum if @head
  end

  def reverse
    list = SimpleLinkedList.new
    current_elem = @head
    while !current_elem.nil?
      list.push(current_elem.datum)
      current_elem = current_elem.next
    end
    list
  end

  def to_a
    array = []
    current_elem = @head
    while !current_elem.nil?
      array.push(current_elem.datum)
      current_elem = current_elem.next
    end
    array
  end
end
