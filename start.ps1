# Скрипт запуска для PowerShell (Windows)
# Запуск: .\start.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  🥪 Сэндвич-шопы - Запуск приложения" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Переход в директорию проекта (если скрипт в microservices)
if (Test-Path "sandwich-shops-front") {
    Set-Location sandwich-shops-front
    Write-Host "[INFO] Переход в sandwich-shops-front..." -ForegroundColor Gray
    Write-Host ""
}

# Проверка Node.js
try {
    $nodeVersion = node --version
    Write-Host "[OK] Node.js найден: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Node.js не найден!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Установите Node.js с https://nodejs.org/" -ForegroundColor Yellow
    Start-Sleep -Seconds 3
    exit 1
}

Write-Host ""

# Проверка node_modules
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Установка зависимостей..." -ForegroundColor Yellow
    Write-Host ""
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Ошибка при установке зависимостей!" -ForegroundColor Red
        Start-Sleep -Seconds 3
        exit 1
    }
    Write-Host ""
}

Write-Host "[INFO] Запуск сервера разработки..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Откройте в браузере: http://localhost:5173/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Для остановки нажмите Ctrl+C" -ForegroundColor Gray
Write-Host ""

npm run dev
