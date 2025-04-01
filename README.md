# Secure Password Generator

Generar contraseñas seguras con interfaz en línea de comandos.

## Características

- Genera contraseñas aleatorias y seguras
- Personaliza la longitud de la contraseña
- Opción para incluir números
- Opción para incluir símbolos especiales
- Interfaz de línea de comandos fácil de usar

## Instalación

```bash
git clone https://github.com/sabiopobre/password-generator.git

cd password-generator

npm install
```

## Uso

```bash
# Generar una contraseña con configuración predeterminada (12 caracteres)
node src/index.js

# Generar una contraseña de 16 caracteres
node src/index.js -l 16

# Generar una contraseña con números
node src/index.js -n

# Generar una contraseña con símbolos
node src/index.js -s

# Generar una contraseña con números y símbolos
node src/index.js -n -s
```

## Opciones

- `-l, --length`: Longitud de la contraseña (predeterminado: 12)
- `-n, --numbers`: Incluir números
- `-s, --symbols`: Incluir símbolos especiales
- `-h, --help`: Mostrar ayuda
- `-V, --version`: Mostrar versión

## Licencia

<p align="center">
	Repositorio generado por <a href="https://github.com/sabiopobre" target="_blank">virtu 🎣</a>
</p>

<p align="center">
	<img src="https://open.soniditos.com/cat_footer.svg" />
</p>

<p align="center">
	Copyright &copy; 2025
</p>

<p align="center">
	<a href="/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
