## Notes of DevBarceinas

### Commands with GIT
- git status
- git add
- git commit -m "url"
- git log
- git remote add origin "url" 
- git remote -v
- git push origin master
- git clone "url"
- git remote add upstream "ur"
- git pull upstream master

### Flexbox

#### justify-content: Alinea elementos horizontalmente
- **flex-start:** Alinea elementos al lado izquierdo del contenedor.
- **flex-end:** Alinea elementos al lado derecho del contenedor.
- **center:** Alienea elementos en el centro del contenedor.
- **space-between:** Muestra elementos con la misma distancia entre ellos.
- **space-around:** Muestra elementos con la misma seperación alrededor de ellos.

#### align-items: Alinea elemetnos verticalmente
- **flex-start:** Alinea elementos a la parte superior del contenedor.
- **flex-end:** Alinea elementos a la parte inferior del contenedor.
- **center:** Alienea elementos en el centro (verticalmente hablando) del contenedor.
- **baseline:** Muestra elementos en la linea base del contenedor.
- **stretch:** Elementos se estiran para ajustarse al contenedor.

#### flex-direction: Define la dirección de los elementos del contenedor
- **row:** Elementos son colocados en la misma dirección del texto.
- **row-reverse:** Elementos son colocados en la dirección opuesta del texto.
- **column:** Elementos se colocan de arriba hacia abajo.
- **column-reverse:** Elementos se colocan de abajo hacia arriba.

#### order: Nos permite ordenar elmentos individuales
- **order:** -1 0 1

#### align-self: Nos permite alienar horizontalment elementos individuales
- **align-self:** Tiene las mismas propiedades que **align-items**

#### flex-wrap
- **nowrap:** Cada elementos se ajusta en una sola linea.
- **wrap:** Los elementos se envuelven de lineas adicionales.
- **wrap-reverse:** Los elementos se envuelven alrededor de lineas adicionales en reversa.

#### flex-flow: Sirve para establecer filas y envolverlas
- **flex-flow:** Acepta las propiedades de **flex-direction** y **flex-wrap**

#### align-content: Establece múltiples lineas cuando están separadas una de otras
- **flex-start:** Las líneas se posicionan en la parte superior del contenedor.
- **flex-end:** Las líneas se posicionan en la parte inferior del contenedor.
- **center:** Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.
- **space-between:** Las líneas se muestran con la misma distancia entre ellas.
- **space-around:** Las líneas se muestran con la misma separación alrededor de ellas.
- **stretch:** Las líneas se estiran para ajustarse al contenedor.