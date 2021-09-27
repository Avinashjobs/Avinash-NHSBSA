$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("wales.feature");
formatter.feature({
  "line": 1,
  "name": "Wales Test Ticket",
  "description": "",
  "id": "wales-test-ticket",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4674484600,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Scenario 1",
  "description": "",
  "id": "wales-test-ticket;scenario-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I launch chrome browser and Navigate to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I put my circumstances into the Checker tool Scenario 1",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "walesttest_Steps.launchbrowser()"
});
formatter.result({
  "duration": 3989662700,
  "status": "passed"
});
formatter.match({
  "location": "walesttest_Steps.Scenario1()"
});
formatter.result({
  "duration": 28554855900,
  "status": "passed"
});
formatter.match({
  "location": "walesttest_Steps.CheckResult()"
});
formatter.result({
  "duration": 145005500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 852044900,
  "status": "passed"
});
formatter.before({
  "duration": 3478492600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Scenario 2",
  "description": "",
  "id": "wales-test-ticket;scenario-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I launch chrome browser and Navigate to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I put my circumstances into the Checker tool Scenario 2",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should get a result of whether I will get help with freecosts",
  "keyword": "Then "
});
formatter.match({
  "location": "walesttest_Steps.launchbrowser()"
});
formatter.result({
  "duration": 3694862400,
  "status": "passed"
});
formatter.match({
  "location": "walesttest_Steps.Scenario2()"
});
formatter.result({
  "duration": 23140755200,
  "status": "passed"
});
formatter.match({
  "location": "walesttest_Steps.CheckResults()"
});
formatter.result({
  "duration": 333184900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 836505200,
  "status": "passed"
});
});