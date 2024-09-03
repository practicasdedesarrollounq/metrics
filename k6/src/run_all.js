import {Counter} from 'k6/metrics';
import {group} from 'k6';
import config from '../config.js';

import {testDescription as test000} from './java_app_root.js';
import {testDescription as test001} from './java_app_endponts_one.js';
import {testDescription as test002} from './java_app_endponts_two.js';

const CounterErrors = new Counter("Errors");

export let options = {
  vus: 1,
  iterations: 1,
  thresholds: {
    "Errors": ["count<1"],
  }
}

let testToRun = [
  test000,
  test001,
  test002 
];

export default function () {

  //console.log("--------------------------------------------------");
  //console.log(" CONFIG :" + JSON.stringify(config, null, " "));
  //console.log("--------------------------------------------------");
  let errors = [];
  for (const test of testToRun) {
  //  console.log("###############################################################");
  //  console.log("###############################################################");
  //  console.log("Running test: " + test.name);
  //  console.log("###############################################################");
  //  console.log("###############################################################");
    try {
      group(test.name, () => {
        if (!test.fn(test.args)) {
          console.error(`FAILURE: "${test.name}" failed in checks`);
          CounterErrors.add(1, {tag: test.name});
          errors.push({
            testName: test.name,
            error: 'Failed in checks'
          });
        }
      });
    } catch (e) {
      CounterErrors.add(1, {tag: test.name});
      console.error(`FAILURE: "${test.name}" throwed an exception\n${e}\n`);
      errors.push({
        testName: test.name,
        error: e.message
      });
    }
  }
  //console.log("--------------------------------------------------");
  //console.log(" ERRORS :" + JSON.stringify(errors, null, " "));
  //console.log("--------------------------------------------------");
}
