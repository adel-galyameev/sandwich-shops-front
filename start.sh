#!/bin/bash

echo "========================================"
echo "  🥪 Сэндвич-шопы - Запуск приложения"
echo "========================================"
echo ""

# Переход в директорию проекта (если скрипт в microservices)
if [ -d "sandwich-shops-front" ]; then
    echo "[INFO] Переход в sandwich-shops-front..."
    cd sandwich-shops-front
    echo ""
fi

# Проверка Node.js
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js не найден!"
    echo ""
    echo "Установите Node.js с https://nodejs.org/"
    exit 1
fi

echo "[OK] Node.js найден: $(node --version)"
echo ""

# Проверка node_modules
if [ ! -d "node_modules" ]; then
    echo "[INFO] Установка зависимостей..."
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo "[ERROR] Ошибка при установке зависимостей!"
        exit 1
    fi
    echo ""
fi

echo "[INFO] Запуск сервера разработки..."
echo ""
echo "Откройте в браузере: http://localhost:5173/"
echo ""
echo "Для остановки нажмите Ctrl+C"
echo ""

npm run dev
