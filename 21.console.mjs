import { Console } from 'console';
import fs from 'fs';

const logFile = fs.createWriteStream('app.log');

const log = new Console({
  stdout: logFile,
  stderr: logFile
}) 

log.info('Hallo Zul')
log.error('Error nih!')