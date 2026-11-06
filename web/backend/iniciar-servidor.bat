@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================
echo   Auxilio Encceja - Iniciar API
echo ============================================
echo.

where node >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Node.js nao encontrado.
    echo Instale em: https://nodejs.org/
    echo Depois feche e abra o terminal novamente.
    pause
    exit /b 1
)

if not exist "node_modules\" (
    echo Instalando dependencias...
    call npm install
    if errorlevel 1 (
        echo [ERRO] Falha no npm install.
        pause
        exit /b 1
    )
    echo.
)

echo Iniciando servidor...
echo.
echo Quando aparecer "Servidor rodando", abra no navegador:
echo   http://localhost:3600/login.html
echo.
echo NAO abra login.html pelo Explorer (file://).
echo Pressione CTRL+C para parar o servidor.
echo.

call npm start
pause
