#!/bin/sh 

TEST_TO_RUN="./src/run_all.js"


k6 run -s 10s:50 \
       -s 10s:100 \
       -s 10s:150 \
       -s 1m:200 \
       $TEST_TO_RUN