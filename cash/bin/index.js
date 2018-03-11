#!/usr/bin/env node

/*
`command` set the arguments and some default settings,
then run the corresponding function to get the result. 

`conf` for set the configuration

`helpers` for get some helps when run this application.

`cash` issued from the converting of currencies.

`argv' like a list for JavaScript.
*/

const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

const argv = process.argv.slice(2);

helpers(argv);

const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};

cash(command);
