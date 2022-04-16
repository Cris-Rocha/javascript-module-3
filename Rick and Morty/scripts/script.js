
const root = document.getElementById('root');

// encabezado
const headerSection = document.createElement('div'); // con comillas
headerSection.id = "header";
root.appendChild(headerSection) // aqui sin comillas

headerSection.innerHTML = "<h1>Rick and Morty API</h1>"

//menu de episodios
const sideabarSection = document.createElement('sidebar')
sideabarSection.id = "sidebar-menu";
root.appendChild(sideabarSection)

// contenedor con las fotos
const contenedorImages = document.createElement('container');
contenedorImages.id = "container-img";
root.appendChild(contenedorImages)






