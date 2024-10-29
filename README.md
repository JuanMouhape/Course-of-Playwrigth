# Course-of-Playwrigth-

*******************Comandos de ejecución en el proyecto de Playwright*******************

***Ver y poder ejecutar desde la UI
 
npx playwright test --ui 

***Correr los test con una configuracion especifica 
 
npx playwright test tests/ClientAppPO.spec.js --config playwrigth.congif1.js

***Correr los test con una configuracion especifica y con un browser especifico si tengo mas de uno en el archivo de configuracion
 
npx playwright test tests/ClientAppPO.spec.js --config playwright.config.js --project=Chrome

***Genera reportes en allure, y no los por defecto:
 
npx playwright test tests/MoreValidations.spec.js --config playwright.config.js --project=chrome --reporter=line,allure-playwright

***Genera el reporte
 
allure generate ./allure-results --clean

***Abre el reporte:
 
allure open ./allure-report

***Ejecutar script desde Package.json:
 
npm run <nombreScript>

***Ejecutar un script de JavaScript

node demo.js

***Convertir un script de TypeScript en JavaScript

tsc demo1.ts

***Crear pasos en Cucumber

npx cucumber-js

***Correr algún caso de prueba con un tags en especifico, y que se cierre la ventana del navegador 

npx cucumber-js --tags "@Validations" --exit

***Ejecutar escenarios en paralelo indicando la cantidad 

npx cucumber-js features/Ecommerce.feature --parallel 2 --exit 

***Ejecutar y crear un reporte HTML con un nombre en especifico (Copiar el path y abrirlo en un Browser de Chrome)

npx cucumber-js features/Ecommerce.feature --parallel 2 --exit --format html:cucumber-report.html

***Si falla que ejecute una vez mas el test con el retry=1

npx cucumber-js --tags "@Regresion" --retry 1 --exit --format html:cucumber-report.html

*******************Ejercicios JavaScript*******************

1. Cree un arreglo llamado gastos que contenga al menos 5 montos de gastos diferentes. 

2. Calcule los gastos totales sumando todos los elementos del arreglo. 

3. Encuentre los gastos individuales más altos y más bajos dentro del conjunto.

// 1. Crear un arreglo llamado gastos
const gastos = [200, 150, 300, 50, 100];

// 2. Calcular los gastos totales
const totalGastos = gastos.reduce((acumulador, gasto) => acumulador + gasto, 0);
console.log(`Gastos totales: $${totalGastos}`);

// 3. Encontrar los gastos individuales más altos y más bajos
const gastoMasAlto = Math.max(...gastos);
const gastoMasBajo = Math.min(...gastos);

console.log(`Gasto más alto: $${gastoMasAlto}`);
console.log(`Gasto más bajo: $${gastoMasBajo}`);


1. Cree un arreglo llamado StudentNames con los nombres de sus estudiantes. 

2. Agregue un nuevo nombre de estudiante al comienzo del arreglo. 

3. Elimine el último nombre del estudiante del arreglo. 

4. Ordene alfabéticamente los nombres de los estudiantes dentro del arreglo.

// 1. Crear un arreglo llamado StudentNames con los nombres de los estudiantes
let StudentNames = ['Juan', 'María', 'Pedro', 'Ana', 'Luis'];

// 2. Agregar un nuevo nombre de estudiante al comienzo del arreglo
StudentNames.unshift('Carlos'); // Agrega 'Carlos' al inicio

// 3. Eliminar el último nombre del estudiante del arreglo
StudentNames.pop(); // Elimina el último nombre

// 4. Ordenar alfabéticamente los nombres de los estudiantes
StudentNames.sort();

console.log(StudentNames);


1. Tiene un arreglo llamada productPrices con varios precios de productos. 

2. Aplique un descuento del 10 % a todos los precios utilizando el método del mapa y almacene los resultados en un nuevo arreglo llamado discountedPrices. 

3. Utilice el método de filtro para crear un nuevo arreglo llamado affordableProducts  que contenga solo productos con un precio inferior a $50. 

4. Calcule el costo total de todos los artículos en el arreglo de affordableProducts  utilizando el método de reducción.

// 1. Crear un arreglo llamado productPrices con varios precios de productos
const productPrices = [60, 30, 45, 80, 20, 10];

// 2. Aplicar un descuento del 10% a todos los precios
const discountedPrices = productPrices.map(price => price * 0.9); // 10% de descuento

// 3. Filtrar productos con un precio inferior a $50
const affordableProducts = discountedPrices.filter(price => price < 50);

// 4. Calcular el costo total de los artículos en affordableProducts
const totalAffordableCost = affordableProducts.reduce((accumulator, price) => accumulator + price, 0);

console.log('Precios originales:', productPrices);
console.log('Precios con descuento:', discountedPrices);
console.log('Productos asequibles:', affordableProducts);
console.log('Costo total de productos asequibles: $', totalAffordableCost);
