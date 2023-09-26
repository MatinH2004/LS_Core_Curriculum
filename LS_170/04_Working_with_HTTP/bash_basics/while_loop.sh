counter=0
max=10

while [[ $counter -le $max ]]
do
  echo $counter
  ((counter++))
done