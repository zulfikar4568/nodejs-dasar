import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = 'reports.json';

function funcError() {
  throw new Error("Error nihh!!!")
}

funcError();