#!/bin/sh 

#TEST_TO_RUN="./src/run_all.js"
TEST_TO_RUN="./src/script_test_carga_multiples_url_paralelo.js"


k6 run -s 15s:500 -s 15s:1000 -s 15s:5000  -s 15s:1000  $TEST_TO_RUN




