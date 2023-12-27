#!/bin/bash
target=${1:-http://localhost:3000}
while true # Loop forever until ctrl-c is pressed
do
  for i in $(seq 10) # perform 100 sequence
  do
    curl $target > /dev/null &
  done

  wait # after 100 req sent wait for their process until they finish
done