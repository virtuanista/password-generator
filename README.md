# Generador de contraseñas seguras

**Genera contraseñas aleatorias desde la terminal con el generador criptográfico de Node.js.**

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs&logoColor=white)
![CLI](https://img.shields.io/badge/interfaz-línea_de_comandos-555)
![Licencia MIT](https://img.shields.io/badge/licencia-MIT-blue)

[![Usar en el navegador](https://img.shields.io/badge/▶_Usar_en_el_navegador-sin_instalar_nada-22c55e?style=for-the-badge)](https://virtuanista.github.io/password-generator/)

```text
$ node src/index.js -l 20 -n -s -c 3

Contraseñas generadas:
H)$Sm(!+24rY..qf@zI=
[<)6*<4:bN[td#G8v_FJ
p<w[fz^k!:0.F(e;*MiB

Entropía: ~129 bits (muy fuerte)
```

## Versión web

En **[virtuanista.github.io/password-generator](https://virtuanista.github.io/password-generator/)** tienes la misma lógica en una página: eliges longitud, números y símbolos, ves la entropía y la copias con un clic. Usa `crypto.getRandomValues` con muestreo por rechazo para que no haya sesgo, y nada sale de tu navegador. El código está en [`web/index.html`](web/index.html).

![Versión web](docs/web.jpg)

## Características

- Usa `crypto.randomInt`, no `Math.random`, que es predecible y no sirve para contraseñas.
- Garantiza al menos una letra, y un número y un símbolo si los pides.
- Mezcla el resultado (Fisher-Yates) para que esos caracteres obligatorios no queden siempre al principio.
- Calcula la entropía aproximada y te dice si la contraseña es débil, aceptable, fuerte o muy fuerte.
- Genera varias de golpe con `--count`.

## Instalación

```bash
git clone https://github.com/virtuanista/password-generator.git
cd password-generator
npm install
```

Si quieres tenerlo como comando global: `npm link` y después `password-generator -l 16 -n -s`.

## Uso

| Opción | Qué hace | Por defecto |
|---|---|---|
| `-l, --length <número>` | Longitud de la contraseña | 12 |
| `-n, --numbers` | Incluye números | no |
| `-s, --symbols` | Incluye símbolos especiales | no |
| `-c, --count <número>` | Cuántas contraseñas generar (1-100) | 1 |
| `-h, --help` | Muestra la ayuda | |
| `-V, --version` | Muestra la versión | |

```bash
node src/index.js              # 12 letras
node src/index.js -l 16 -n     # 16 caracteres con números
node src/index.js -l 24 -n -s  # 24 caracteres con números y símbolos
```

## Pruebas

```bash
npm test
```

Comprueba la longitud, que aparezca cada grupo de caracteres elegido, los errores de longitud y el cálculo de entropía.

## Licencia

[MIT](LICENSE) © 2025 virtuanista

<p align="center">
	Repositorio generado por <a href="https://github.com/virtuanista" target="_blank">virtu 🎣</a>
</p>

<p align="center">
	<img src="https://open.soniditos.com/cat_footer.svg" alt="Gatito" />
</p>

<p align="center">
	Copyright &copy; 2025
</p>

<p align="center">
	<a href="LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8" alt="Licencia MIT" /></a>
</p>
