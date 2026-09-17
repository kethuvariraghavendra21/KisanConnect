@echo off
setlocal
cd /d "%~dp0"
title KisanConnect Complete
if not exist node_modules (
  echo Installing KisanConnect dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo Installation failed. Please send this window screenshot to ChatGPT.
    pause
    exit /b 1
  )
)
if not exist .env copy .env.example .env >nul
start "KisanConnect Server" cmd /k "cd /d "%~dp0" && npm start"
timeout /t 3 /nobreak >nul
start "KisanConnect" http://localhost:4000
endlocal
