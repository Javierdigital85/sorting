describe('Bubble Sort', function () {

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an unsorted array', function () {
    spyOn(window, 'swap').and.callThrough();
    expect(bubbleSort([9, 5, 7, 3, 8, 2, 1])).toEqual([1, 2, 3, 5, 7, 8, 9]);
    expect(window.swap.calls.count()).toEqual(42);
  });

  it('handles an sorted array', function () {
    spyOn(window, 'swap').and.callThrough();
    expect(bubbleSort([1, 3, 5, 7, 9])).toEqual([1, 3, 5, 7, 9]);
    expect(window.swap.calls.count()).toEqual(20);
  });

  it('handles an reverse array', function () {
    spyOn(window, 'swap').and.callThrough();
    expect(bubbleSort([9, 7, 5, 3, 1, 0])).toEqual([0, 1, 3, 5, 7, 9]);
    expect(window.swap.calls.count()).toEqual(30);
  });

});

/*
Si no sabés por dónde arrancar, te damos algunas ideas:

Un Arreglo desordenado que termine ordenado.
Un Arreglo ordenado que debe mantenerse ordenado.
Un Arreglo a la inversa ([3,2,1]) que termine ordenado.
*/