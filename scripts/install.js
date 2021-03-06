#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const mkdirp = require('mkdirp');

const configDirPath = path.join(os.homedir(), '.talerts');
const configPath = path.join(configDirPath, '.env');
const reposPath = path.join(configDirPath, 'repos.json');

mkdirp(configDirPath, (error) => {
  if (error) return console.error('could not finish installing talerts:', error);

  fs.open(configPath, 'r', (err, fd) => {
    if (err && err.code === 'ENOENT') {
      fs.writeFileSync('', configPath);
    }

    fs.open(reposPath, 'r', (err, fd) => {
      if (err && err.code === 'ENOENT') {
        fs.writeFileSync('{}', reposPath);
      }
    });
  });
});
