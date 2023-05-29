fetch('JSON/cardapio.json')
  .then(response => response.json())
  .then(data => {
    const bolosBrancos = document.getElementById('bolos-brancos');
    const bolosMorango = document.getElementById('bolos-morango');
    const bolosChocolate = document.getElementById('bolos-chocolate');
    const bolosNozes = document.getElementById('bolos-nozes');
    const salgadosSimples = document.getElementById('salgados-simples');
    const salgadosEspeciais = document.getElementById('salgados-especiais');
    const docesSimples = document.getElementById('doces-simples');
    const docesEspeciais = document.getElementById('doces-especiais');
    const items = data.items;

    items.forEach(item => {
      
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('col-md-3', 'col-sm-6');
      
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card', 'text-bg-dark');
      
      const link = document.createElement('a');
      link.href = item.link;
      
      const image = document.createElement('img');
      image.src = item.image;
      image.alt = 'Bolos';
      image.classList.add('card-img', 'zoom-image');
      image.loading = 'lazy';
      
      const overlayDiv = document.createElement('div');
      overlayDiv.classList.add('card-img-overlay-notop');
      
      const title = document.createElement('h4');
      title.classList.add('card-title');
      title.innerHTML = item.title;
      
      const whatsappLink = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(item.title);
      item.link = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(item.title);

      const description = document.createElement('p');

      const orderLink = document.createElement('a');
      orderLink.href = item.link;
      orderLink.classList.add('btn', 'btn-second');
      orderLink.textContent = 'Peça o seu';

      overlayDiv.appendChild(title);
      overlayDiv.appendChild(description);
      overlayDiv.appendChild(orderLink);

      link.appendChild(image);
      cardDiv.appendChild(link);
      cardDiv.appendChild(overlayDiv);

      itemDiv.appendChild(cardDiv);

      if (item.description === 'bolosBrancos') {
        bolosBrancos.appendChild(itemDiv);
      } else if (item.description === 'bolosMorango') {
        bolosMorango.appendChild(itemDiv);
      } else if (item.description === 'bolosChocolate') {
        bolosChocolate.appendChild(itemDiv);
      } else if (item.description === 'bolosNozes') {
        bolosNozes.appendChild(itemDiv);
      } else if (item.description === 'salgadosSimples') {
        salgadosSimples.appendChild(itemDiv);
      } else if (item.description === 'salgadosEspeciais') {
        salgadosEspeciais.appendChild(itemDiv);
      } else if (item.description === 'docesSimples') {
        docesSimples.appendChild(itemDiv);
      } else if (item.description === 'docesEspeciais') {
        docesEspeciais.appendChild(itemDiv);
      }
    });

    // Efeito parallax
    var parallaxContainer = document.querySelector('.parallax-container');

    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset;
      parallaxContainer.style.backgroundPosition = 'center ' + (-scrollTop / 2) + 'px';
    });
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });
