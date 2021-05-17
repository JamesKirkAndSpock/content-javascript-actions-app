const core = require('actions/core');
const github = require('actions/github');


try {
    // who to greet, the input variable provided in the action.yml
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    // we set the outpute that we have provided in the action.yml file.  
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}