=begin

Start time: 11:40

# --------------------------- Problem
  Restate the problem:

  A child is playing with a ball on the nth floor of a tall building.
  The height of this floor, h, is known. He drops the ball out of the
  window. The ball bounces (for example), to two-thirds of its height
  (a bounce of 0.66). His mother looks out of the window 1.5 meters
  from the ground. How many times will the mother see the ball pass
  in front of her window (including when it's falling and bouncing?)

  Three conditions must be met for a valid experiment:
    - Float parameter "h" in meters must be greater than 0
    - Float parameter "bounce" must be greater than 0 and less than 1
    - Float parameter "window" must be less than "h"

  If all three conditions above are fulfilled, return a positive integer,
  otherwise return -1.

  Note:
    - The ball can only be seen if the height of the rebounding ball is
      strictly greater than the window parameter.

  Input: integer, float, float
  Output: integer

# --------------------------- Test Cases + Rules
  Explicit:
  Implicit:

  Examples:
    - h = 3, bounce = 0.66, window = 1.5, result is 3
    - h = 3, bounce = 1, window = 1.5, result is -1
      Condition 2 (bounce) not fulfilled...

# --------------------------- Data Structure

# --------------------------- Scratch Book
  - #round
# --------------------------- Algorithm
  GIVEN H, BOUNCE, & WINDOW:
    1. return -1 if H is less than 0
      - or if bounce is not between 0 and 1
      - or if h is less than window
    2. if h * bouce is less than or equal to window
      - return 1
      - else, return 2 + bouncingBall(h * bounce, bounce, window)

=end

def bouncingBall(h, bounce, window)
  if h <= 0 || bounce < 0 || bounce >= 1 || window >= h
    -1  
  elsif h * bounce <= window
    1
  else      
    return 2 + bouncingBall(h * bounce, bounce, window)
  end
end

# solution using recursion

def bouncingBall(h, bounce, window)
  bounce < 0 || bounce >= 1 || h <= window || window < 0 ? -1 : bouncingBall(h * bounce, bounce, window) + 2
end

p bouncingBall(3, 0.66, 1.5) == 3
p bouncingBall(30, 0.66, 1.5) == 15
p bouncingBall(30, 0.75, 1.5) == 21
p bouncingBall(30, 0.4, 10) == 3
p bouncingBall(40, 1, 10) == -1
p bouncingBall(-5, 0.66, 1.5) == -1
p bouncingBall(1, 0.66, 0.66) == 1
p bouncingBall(1, 0.66, 1) == -1