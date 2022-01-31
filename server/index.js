const app = require('./app');
const { runScraper } = require('./utils/scraper');
const port = process.env.PORT;
const schedule = require('node-schedule');

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const rule = new schedule.RecurrenceRule();
rule.hour = 4;
rule.dayOfWeek = 0;
rule.tz = 'Etc/UTC'; //this will execute the job at 04:00 UTC every Sunday
schedule.scheduleJob(rule, runScraper);
