const app = require('./app');
const { runScraper } = require('./utils/scraper');
const port = process.env.PORT;
const schedule = require('node-schedule');

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

runScraper();

// const rule = new schedule.RecurrenceRule();
// rule.hour = 10;
// rule.dayOfWeek = 2;
// rule.tz = 'Etc/UTC'; //this will execute the job at 10:00 UTC every Tuesday
// schedule.scheduleJob(rule, runScraper);
