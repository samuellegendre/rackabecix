#!/bin/bash
if [ "$DEPLOY_COMMANDS" != "false" ]; then
  node deploy-commands.js  
fi

if [ "$FORCE_INITIALIZE_DATABASE" == "true" ]; then
  node db/initialize-database.js --force
else
  node db/initialize-database.js
fi

node index.js