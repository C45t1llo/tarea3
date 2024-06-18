
function presentarMensaje() {
  var mensaje = document.getElementById("mensaje").value;
  var veces = parseInt(document.getElementById("veces").value);

  if (veces > 0) {
    var mensajeCompleto = "";
    for (var i = 0; i < veces; i++) {
      mensajeCompleto += mensaje + "<br>";
    }
    document.getElementById("resultado").innerHTML = mensajeCompleto;
  } else {
    document.getElementById("resultado").innerHTML = "La cantidad de veces debe ser mayor que 0.";
  }
}


function mostrarMultiplos() {
  var base = parseInt(document.getElementById("base").value);
  var N = parseInt(document.getElementById("numero").value);
  var multiplosList = document.getElementById("multiplos-list");
  multiplosList.innerHTML = ""; 

  if (!isNaN(base) && !isNaN(N) && base >= 1 && N >= 1) {
    for (var i = base; i <= N; i++) {
      if (i % base === 0) {
        var listItem = document.createElement("li");
        listItem.textContent = i;
        multiplosList.appendChild(listItem);
      }
    }
  } else {
    alert("Ingrese números válidos para la base y N (mayores o iguales a 1).");
  }
}

function mostrarPositivos() {
  var numerosInput = document.getElementById("numeros").value.trim();
  var numerosArray = numerosInput.split(",");
  var positivosList = document.getElementById("positivos-list");
  positivosList.innerHTML = "";

  for (var i = 0; i < numerosArray.length; i++) {
    var numero = parseInt(numerosArray[i].trim());
    if (!isNaN(numero) && numero >= 0) {
      var listItem = document.createElement("li");
      listItem.textContent = numero;
      positivosList.appendChild(listItem);
    }
  }
}
function mostrarPares() {
  var numerosInput = document.getElementById("numeros").value.trim();
  var numerosArray = numerosInput.split(",");
  var paresList = document.getElementById("pares-list");
  paresList.innerHTML = "";

  for (var i = 0; i < numerosArray.length; i++) {
    var numero = parseInt(numerosArray[i].trim());
    if (!isNaN(numero) && numero % 2 === 0) {
      var listItem = document.createElement("li");
      listItem.textContent = numero;
      paresList.appendChild(listItem);
    }
  }
}
function mostrarDivisores() {
  var numero = parseInt(document.getElementById("numero").value);
  var divisoresList = document.getElementById("divisores-list");
  divisoresList.innerHTML = "";

  if (!isNaN(numero) && numero >= 1) {
    for (var i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        var listItem = document.createElement("li");
        listItem.textContent = i;
        divisoresList.appendChild(listItem);
      }
    }
  } else {
    alert("Ingrese un número válido mayor o igual a 1.");
  }
}
document.addEventListener("DOMContentLoaded", function() {
  var tablaSumar = document.getElementById("tabla-sumar");

  for (var i = 1; i <= 12; i++) {
      var suma = i + 10;
      var listItem = document.createElement("li");
      listItem.textContent = `${i} + 10 = ${suma}`;
      tablaSumar.appendChild(listItem);
  }
});

function generarTablas() {
  var inicio = parseInt(document.getElementById('inicio').value);
  var fin = parseInt(document.getElementById('fin').value);
  var tablasHTML = '';

  for (var i = inicio; i <= fin; i++) {
      tablasHTML += '<h3>Tabla del ' + i + '</h3>';
      tablasHTML += '<table>';
      tablasHTML += '<tr><th>Multiplicador</th><th>Resultado</th></tr>';
      for (var j = 1; j <= 12; j++) {
          tablasHTML += '<tr>';
          tablasHTML += '<td>' + i + ' x ' + j + '</td>';
          tablasHTML += '<td>' + (i * j) + '</td>';
          tablasHTML += '</tr>';
      }
      tablasHTML += '</table>';
  }

  document.getElementById('tablas').innerHTML = tablasHTML;
  return false; 
}
function presentarNumeros(event) {
  event.preventDefault(); 

  var numero1 = parseInt(document.getElementById('numero1').value);
  var numero2 = parseInt(document.getElementById('numero2').value);

  var numerosComprendidos = [];

  var inicio = Math.min(numero1, numero2);
  var fin = Math.max(numero1, numero2);

  for (var i = inicio; i <= fin; i++) {
      numerosComprendidos.push(i);
  }

  mostrarNumeros(numerosComprendidos);

  return false; 
}

function mostrarNumeros(numeros) {
  var ulNumeros = document.getElementById('numerosLista');
  ulNumeros.innerHTML = ''; 

  numeros.forEach(function(numero) {
      var li = document.createElement('li');
      li.textContent = numero;
      ulNumeros.appendChild(li);
  });
}
function mostrarNumerosPares() {
  var numero1 = parseInt(document.getElementById('numero1').value);
  var numero2 = parseInt(document.getElementById('numero2').value);

  var numerosPares = [];

  if (numero1 > numero2) {
      var temp = numero1;
      numero1 = numero2;
      numero2 = temp;
  }

  for (var i = numero1; i <= numero2; i++) {
      if (i % 2 === 0) { 
          numerosPares.push(i);
      }
  }

  var numerosLista = document.getElementById('numerosLista');
  numerosLista.innerHTML = ''; 
  numerosPares.forEach(function(numero) {
      var li = document.createElement('li');
      li.textContent = numero;
      numerosLista.appendChild(li);
  });
}
function ingresarNumeros() {
  var numero1 = parseInt(document.getElementById('numero1').value);
  var numero2 = parseInt(document.getElementById('numero2').value);
  var numero3 = parseInt(document.getElementById('numero3').value);
  var numero4 = parseInt(document.getElementById('numero4').value);
  var numero5 = parseInt(document.getElementById('numero5').value);

  var numeros = [numero1, numero2, numero3, numero4, numero5];

  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '<h3>Números ingresados:</h3>';
  resultadoDiv.innerHTML += '<p>' + numeros.join(', ') + '</p>';
}
function buscarPares() {
  var numerosInput = document.getElementById('numeros').value;
  var numeros = numerosInput.split(',').map(Number);

  var numerosPares = numeros.filter(function(numero) {
      return numero % 2 === 0; 
  });

  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '<h3>Números pares ingresados:</h3>';
  resultadoDiv.innerHTML += '<p>' + numerosPares.join(', ') + '</p>';
}
function calcularSuma() {
  var numerosInput = document.getElementById('numeros').value;
  var numeros = numerosInput.split(',').map(Number); 

  var suma = numeros.reduce(function(total, numero) {
      return total + numero;
  }, 0);

  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '<h3>Suma de números ingresados:</h3>';
  resultadoDiv.innerHTML += '<p>' + suma + '</p>';
}
function calcularPromedio() {
  var numerosInput = document.getElementById('numeros').value;
  var numeros = numerosInput.split(',').map(Number); 

  var suma = numeros.reduce(function(total, numero) {
      return total + numero;
  }, 0);

  var promedio = suma / numeros.length;

  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '<h3>Promedio de números ingresados:</h3>';
  resultadoDiv.innerHTML += '<p>' + promedio + '</p>';
}
function buscarMayorMenor() {
  var numerosInput = document.getElementById('numeros').value;
  var numeros = numerosInput.split(',').map(Number); 

  var mayor = Math.max(...numeros); 
  var menor = Math.min(...numeros); 

  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '<h3>Mayor y Menor números ingresados:</h3>';
  resultadoDiv.innerHTML += '<p>Mayor: ' + mayor + '</p>';
  resultadoDiv.innerHTML += '<p>Menor: ' + menor + '</p>';
}

function clasificarNumeros() {
  var numerosInput = document.getElementById('numeros').value;
  var numeros = numerosInput.split(',').map(Number); 

  var positivos = [];
  var negativos = [];

  numeros.forEach(function(numero) {
      if (numero > 0) {
          positivos.push(numero);
      } else if (numero < 0) {
          negativos.push(numero);
      }
  });

  mostrarResultados(positivos, negativos);
}

function mostrarResultados(positivos, negativos) {
  var ulPositivos = document.getElementById('positivos');
  var ulNegativos = document.getElementById('negativos');

  ulPositivos.innerHTML = '';
  ulNegativos.innerHTML = '';

  positivos.forEach(function(numero) {
      var li = document.createElement('li');
      li.textContent = numero;
      ulPositivos.appendChild(li);
  });

  negativos.forEach(function(numero) {
      var li = document.createElement('li');
      li.textContent = numero;
      ulNegativos.appendChild(li);
  });
}
function contarOcurrencias(event) {
  event.preventDefault();

  var numerosInput = document.getElementById('numeros').value;
  var numeros = numerosInput.split(',').map(Number); 

  var numeroBuscado = parseInt(document.getElementById('numeroBuscado').value);

  var contador = 0;

  for (var i = 0; i < numeros.length; i++) {
      if (numeros[i] === numeroBuscado) {
          contador++;
      }
  }

  var mensajeResultado = document.getElementById('mensajeResultado');
  mensajeResultado.textContent = `El número ${numeroBuscado} aparece ${contador} veces en el arreglo.`;

  return false;
}
function mostrarOrdenInverso(event) {
  event.preventDefault(); 

  var numerosInput = document.getElementById("numeros").value;

  var numerosArray = numerosInput.split(",").map(item => parseInt(item.trim()));
  if (numerosArray.length !== 5) {
      mostrarMensajeError("Debe ingresar exactamente 5 números.");
      return;
  }

  var numerosInverso = numerosArray.reverse();

  var mensajeResultado = document.getElementById("mensajeResultado");
  mensajeResultado.textContent = "Números en orden inverso: " + numerosInverso.join(", ");
}

function mostrarMensajeError(mensaje) {
  var mensajeResultado = document.getElementById("mensajeResultado");
  mensajeResultado.textContent = mensaje;
}

function filtrarElementos(event) {
  event.preventDefault(); 

  var numerosInput = document.getElementById("numeros").value;
  var valor = parseInt(document.getElementById("valor").value);

  var numerosArray = numerosInput.split(",").map(item => parseInt(item.trim()));

  var numerosMayores = numerosArray.filter(numero => numero > valor);

  mostrarResultado(numerosMayores);
}

function mostrarResultado(numerosMayores) {
  var resultadoDiv = document.getElementById("resultado");
  if (numerosMayores.length === 0) {
      resultadoDiv.innerHTML = "<p>No hay números mayores que el valor dado.</p>";
  } else {
      resultadoDiv.innerHTML = "<h3>Números mayores que el valor dado:</h3>";
      var ul = document.createElement("ul");
      numerosMayores.forEach(numero => {
          var li = document.createElement("li");
          li.textContent = numero;
          ul.appendChild(li);
      });
      resultadoDiv.appendChild(ul);
  }
}

function mostrarCeros() {
  var numerosInput = document.getElementById('numeros').value; 
  var numeros = numerosInput.split(','); 

  var cerosEncontrados = []; 
  for (var i = 0; i < numeros.length; i++) {
      var num = parseFloat(numeros[i].trim()); 

      if (num === 0) {
          cerosEncontrados.push(num); 
      }
  }

  var resultado = document.getElementById('resultado');
  resultado.textContent = 'Ceros encontrados: ' + cerosEncontrados.join(', ');
}

function mostrarCaracteres() {
  var cadena = document.getElementById('cadena').value; 
  var caracteres = cadena.split('');
  var resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; 

  for (var i = 0; i < caracteres.length; i++) {
      resultado.textContent += caracteres[i] + '\n';
  }
}

        function contarVocales() {
            var cadena = document.getElementById('cadena').value.toLowerCase();

            var contador = 0;
            var vocales = 'aeiou';
            for (var i = 0; i < cadena.length; i++) {
                var caracter = cadena.charAt(i); 

                if (vocales.indexOf(caracter) !== -1) {
                    contador++; 
                }
            }

            var resultado = document.getElementById('resultado');
            resultado.textContent = 'Número de vocales encontradas: ' + contador;
        }
        function mostrarCaracteresPares() {
          var cadena = document.getElementById('cadena').value; 
          var caracteresPares = '';

          for (var i = 1; i < cadena.length; i += 2) {
              caracteresPares += cadena[i]; 
          }

          var resultado = document.getElementById('resultado');
          resultado.textContent = 'Caracteres en posiciones pares: ' + caracteresPares;
      }
      function convertirMayusculas() {
        var cadena = document.getElementById('cadena').value;
        var cadenaMayusculas = '';

        for (var i = 0; i < cadena.length; i++) {
            var caracter = cadena.charAt(i); 
            var caracterMayuscula = caracter.toUpperCase(); 

            cadenaMayusculas += caracterMayuscula; 
        }

        var resultado = document.getElementById('resultado');
        resultado.textContent = 'Cadena en mayúsculas: ' + cadenaMayusculas;
    }
    function contarPalabras() {
      var cadena = document.getElementById('cadena').value; 
      var palabras = cadena.trim().split(/\s+/); 
      palabras = palabras.filter(function(palabra) {
          return palabra.length > 0;
      });

      var numeroPalabras = palabras.length; 

      var resultado = document.getElementById('resultado');
      resultado.textContent = 'Número de palabras: ' + numeroPalabras;
  }
  function presentarPrimerCaracter() {
    var cadena = document.getElementById('cadena').value; 
    var primerCaracter = cadena.charAt(0); 
    var longitudCadena = cadena.length; 
    var resultado = '';
    for (var i = 0; i < longitudCadena; i++) {
        resultado += primerCaracter;
    }

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = 'Resultado: ' + resultado;
}
function invertirCadena() {
  var cadena = document.getElementById('cadena').value; 
  var cadenaInvertida = cadena.split('').reverse().join('');
  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = 'Cadena invertida:\n' + cadenaInvertida;
}
function calcularFrecuencia() {
  var cadena = document.getElementById('cadena').value; 
  if (cadena.length === 0) {
      alert('Por favor ingrese una cadena válida.');
      return;
  }

  var ultimoCaracter = cadena.charAt(cadena.length - 1); 

  var frecuencia = 0;

  for (var i = 0; i < cadena.length; i++) {
      if (cadena.charAt(i) === ultimoCaracter) {
          frecuencia++;
      }
  }

  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = 'Frecuencia de "' + ultimoCaracter + '": ' + frecuencia;
}
function contarCaracteres() {
  var cadena = document.getElementById('cadena').value; 
  var longitud = cadena.length;

  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = 'La cadena tiene ' + longitud + ' caracteres.';
}

function eliminarEspacios() {
  var cadena = document.getElementById("cadenaInput").value;

  var cadenaSinEspacios = cadena.replace(/\s/g, '');

  var resultado = document.getElementById("resultado");
  resultado.textContent = "Cadena sin espacios: " + cadenaSinEspacios;
}



function multiplode7(numero) {
  var multiplosList = document.getElementById('multiplos-list');
  multiplosList.innerHTML = '';

  for (var i = 1; i <= numero; i++) {
    if (i % 7 === 0) {
      var item = document.createElement('li');
      item.textContent = i;
      multiplosList.appendChild(item);
    }
  }
}

var form = document.getElementById('multiplos-form');
var numeroInput = document.getElementById('numero');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  var numero = parseInt(numeroInput.value);

  multiplode7(numero);
});
