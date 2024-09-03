import http from 'k6/http'
import config from '../config.js';

import { check, sleep } from 'k6'


export const testDescription = {
  name: 'Test Java App - Endpoint Two',
  fn: test,
}

export default function() {
  runTest(testDescription);
}

function test() {

  let res = http.get(config.javaAppBaseURL+'/endponts/two')
  return check(res, { 'success': (r) => r.status === 200 })


}