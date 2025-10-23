#!/bin/sh
echo "⏳ Esperando que la app Java esté disponible..."

for i in $(seq 1 30); do
  if curl -s http://java_app:8080/ > /dev/null; then
    echo "✅ La app Java está lista!"
    exec "$@"  # ejecuta el comando que sigue, en este caso K6
    exit 0
  fi
  echo "Intento $i: todavía no responde..."
  sleep 2
done

echo "❌ Timeout: La app Java no respondió"
exit 1
