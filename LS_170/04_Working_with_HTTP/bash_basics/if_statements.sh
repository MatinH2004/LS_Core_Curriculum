# nested if statement

integer=4

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10

  if [[ $integer -lt 5 ]]
  then
    echo $integer is also less than 5
  fi
fi

# two conditional branches with if and else

integer=15

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10
else
  echo $integer is not less than 10
fi

# three conditional branches with if, elif and else

integer=15

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10
elif [[ $integer -gt 20 ]]
then
  echo $integer is greater than 20
else
  echo $integer is between 10 and 20
fi

# matching two conditions using && (and)

integer=15

if [[ $integer -gt 10 ]] && [[ $integer -lt 20 ]]
then
  echo $integer is between 10 and 20
fi

# matching one of two conditions || (or)

integer=12

if [[ $integer -lt 5 ]] || [[ $integer -gt 10 ]]
then
  echo $integer is less than 5 or greater than 10.
fi

# negating conditions using ! (not)

integer=8

if [[ ! ($integer -lt 5 || $integer -gt 10) ]]
then
  echo $integer is between 5 and 10.
fi