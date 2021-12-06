#!/bin/bash

cd backend
xterm -e nodemon server &
cd ..

cd frontend
xterm -e npm run start &
cd ..