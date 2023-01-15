export const getFormInputs = book => {
  return [
    {name: 'name', value: book?.name ?? '', label: 'Nombre', required: true},
    {
      name: 'categoria',
      value: book?.categoria ?? '',
      label: 'Categoría',
      required: true,
    },
    {name: 'tipo', value: book?.tipo, label: 'Tipo', required: true},
    {
      name: 'price',
      value: book?.price.toString() ?? '',
      label: 'Precio',
      required: true,
    },
    {
      name: 'authorId',
      value: book?.authorId.toString() ?? '',
      label: 'Autor ID',
      required: true,
    },
    {
      name: 'authorName',
      value: book?.authorName ?? '',
      label: 'Autor',
      required: true,
    },
    {
      name: 'prologo',
      value: book?.prologo ?? '',
      label: 'Prólogo',
      required: true,
    },
    {
      name: 'publicacion',
      value: book?.publicacion ?? '',
      label: 'Fecha de publicación',
      required: true,
    },
    {
      name: 'portada',
      value: book?.portada ?? 'https://i.picsum.photos/id/591/300/300.jpg?hmac=tA0S3YLt4H_ZuIDjMsEPcjYZZF1648-2N63fS1i6Lvs',
      label: 'Portada',
      required: true,
    },
  ];
};