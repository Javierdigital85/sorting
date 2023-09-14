function bubbleSort(array) {
  if (array.length === 0) return [];
  else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
  // let numeroOrdenados = array.sort((a,b) => a - b)
  //   return numeroOrdenados
}

function swap(array, first, second) {
  if (array[first] > array[second]) {// Comprobar si el elemento en la posición 'first' es mayor que el elemento en la posición 'second'
    let temp = array[first];//// Almacenar temporalmente el valor del elemento en la posición 'first'
    array[first] = array[second];// Asignar el valor del elemento en la posición 'second' al 'first'
    array[second] = temp;// Asignar el valor almacenado en 'temp' (originalmente en 'first') a la posición 'second'
  }
}
