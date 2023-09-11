let favMovies= [
    // movie id
    // moviename
    {
      id :'1',
      title: 'PARANORMAL ACTIVITY',
      releaseDate: '2010'
    },
    {
      id :'2',
      title: 'INSIDIOUS',
      releaseDate: '2011'
    },
    { 
        id :'3',
        title: 'THE RING',
        releaseDate: '2010'
    },
    {   
        id :'4',
        title: 'PIRATES OF THE CARIBBEAN',
        releaseDate: '2012'
    },
    {   
        id :'5',
        title: 'FAST AND FURIOUS',
        releaseDate: '2010'
    },
    {
        id :'6',
        title: 'ALICE IN WONDERLAND',
        releaseDate: '2014'
    },  
    {
        id :'7',
        title: 'NARNIA',
        releaseDate: '2010'
    },
    {
        id :'8',
        title: 'HARRY POTTER',
        releaseDate: '2006'
    },
    {   
        id :'9',
        title: 'GRUDGE',
        releaseDate: '2004'
    },
    {
        id :'10',
        title: 'HOW TO TRAIN YOUR DRAGON',
        releaseDate: '2011'
    },
    {
        id :'11',
        title: 'ENOLA HOLMES',
        releaseDate: '2018'
    },
    {
        id :'12',
        title: 'SEA BEAST',
        releaseDate: '2022'
    },
  ];
  function makeMovieDiv(movie) {
    // outer div
    const div = document.createElement('div')
    div.setAttribute('class', 'movie-card')
  
    const id = `movie-${movie['id']}`
    div.setAttribute('id', id)
  
    // title
    const h2 = document.createElement('h2')
    h2.innerText = movie['title'];
    // releasedate
    const h3 = document.createElement('h3')
    h3.innerText = movie['releaseDate']
    // button
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener('click', function(){
    div.remove();
})
   
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(button);
  
  
    return div;
  }
  
  function appendToApp(movieDiv) {
    const app = document.querySelector('#app');
    app.appendChild(movieDiv)
  }
  
  for(let i=0 ;i<favMovies.length; i++) {
    const movieDiv = makeMovieDiv(favMovies[i])
    appendToApp(movieDiv)
  }
  
  