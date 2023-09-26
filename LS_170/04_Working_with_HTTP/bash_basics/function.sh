greeting () {
  echo Hello $1
}

greeting 'Peter'

# The integers represent the parameters in order

greeting () {
  echo "Hello $1"
  echo "Hello $2"
}

greeting 'Peter' 'Paul' # outputs 'Hello Peter' 'Hello Paul' on separate lines
#          $1      $2