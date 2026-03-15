@echo off
echo ========================================
echo   🥪 Сэндвич-шопы - Запуск приложения
echo ========================================
echo.

REM Переход в директорию проекта (если скрипт в microservices)
if exist "sandwich-shops-front" (
    cd sandwich-shops-front
)

REM Проверка наличия Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js не найден!
    echo.
    echo Установите Node.js с https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js найден: 
node --version
echo.

REM Проверка наличия node_modules
if not exist "node_modules\" (
    echo [INFO] Установка зависимостей...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Ошибка при установке зависимостей!
        pause
        exit /b 1
    )
    echo.
)

echo [INFO] Запуск сервера разработки...
echo.
echo Откройте в браузере: http://localhost:5173/
echo.
echo Для остановки нажмите Ctrl+C
echo.

call npm run dev
