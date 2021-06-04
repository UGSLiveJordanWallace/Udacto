@REM colorization
color 06
title Udacto Installer
cls

@REM get admin permissions for installation
@echo off
:: BatchGotAdmin
:-------------------------------------
@REM  --> check for permissions
    IF "%PROCESSOR_ARCHITECTURE%" EQU "amd64" (
>nul 2>&1 "%SYSTEMROOT%\SysWOW64\cacls.exe" "%SYSTEMROOT%\SysWOW64\config\system"
) ELSE (
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
)

@REM --> if error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params= %*
    echo UAC.ShellExecute "cmd.exe", "/c ""%~s0"" %params:"=""%", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0"

@REM confirm installation
echo *Let's GOOOO

@REM Deleting Previous Dependencies
:DEPENDENCIES
echo Removing Previous Dependencies...
del /s /q "C:\ProgramData\Udacto" 
for /d %%p in ("C:\ProgramData\Udacto\*.*") do rmdir "%%p" /s /q 
mkdir C:\ProgramData\Udacto
echo We Got The Folder

echo Downloading Udacto
powershell -c "Invoke-WebRequest -Uri 'https://udacto.netlify.app/udacto-stable.zip' -OutFile 'C:\ProgramData\Udacto\udacto-stable.zip'"
echo No Fear Udacto Is Here

echo Extracting Files...
powershell -Command "Expand-Archive C:\ProgramData\Udacto\udacto-stable.zip -DestinationPath C:\ProgramData\Udacto"
echo Files Extracted

echo Distributing The Love
copy C:\ProgramData\Udacto\Udacto.exe C:\Users\%username%\Desktop 
copy C:\ProgramData\Udacto\Udacto.exe C:\Users\%username%\Downloads
echo Executable copied from "C:\ProgramData\Udacto"
echo We Did It!!! Check This Out

echo starting "Udacto"...
"C:\ProgramData\Udacto\Udacto.exe"

echo Bye Bye... 
exit