<?php

// ==== НАСТРОЙКИ ====
$projectDir = "/var/www/fastuser/data/www/work.prvdemo.ru";
$repoUrl = "https://github.com/antonovayal97/shelkinvest-html.git";

// ==== Проверяем содержимое папки до клонирования ====
echo "Contents of $projectDir before deployment:\n";
if (is_dir($projectDir)) {
    exec("ls -la " . escapeshellarg($projectDir), $output);
    echo implode("\n", $output) . "\n\n";
} else {
    echo "Directory does not exist yet.\n\n";
}

// ==== Удаляем скрипт перед клонированием ====
unlink(__FILE__);

// ==== Клонируем или обновляем репозиторий ====
if (is_dir($projectDir . "/.git")) {
    // Если репозиторий уже есть — делаем pull
    chdir($projectDir);
    exec("git pull origin main 2>&1", $gitOutput);
} else {
    // Если нет — клонируем
    exec("git clone " . escapeshellarg($repoUrl) . " " . escapeshellarg($projectDir) . " 2>&1", $gitOutput);
}

// ==== Вывод результата ====
echo "Deploy complete\n";
echo implode("\n", $gitOutput) . "\n";
