#!/bin/sh 

TEST_TO_RUN="./src/run_all.js"

k6 run -s 10s:500 -s 10s:1000 -s 10s:5000  -s 10s:10000  $TEST_TO_RUN
