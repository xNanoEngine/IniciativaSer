@echo off

for /l %%i in (1,1,100) do (
  rem Ejecutar el comando y redirigir la salida al archivo, agregándola al final del mismo
  node .\busqueda.js 
)
