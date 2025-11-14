@echo off

@REM wt -p "CommandPrompt" -d .. cmd /k "npm run dev" ; split-pane -H -s 0.4 -p "CommandPrompt" -d .. cmd /k "npm run ngrok" ; split-pane -V -s 0.6 -p "Git Bash" -d .. cmd /k "npm run traffic && echo(  && bash"

wt -d .. cmd /k "npm run dev" ; split-pane -V -s 0.7 -d .. cmd /k "npm run traffic && echo( && bash" ; move-focus left ; split-pane -H -d .. cmd /k "npm run ngrok"



exit
