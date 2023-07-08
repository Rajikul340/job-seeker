const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const slideWidth = document.querySelector('.carousel-slide').clientWidth;

let slidePosition = 0;

prevButton.addEventListener('click', () => {
  if (slidePosition === 0) {
    slidePosition = carouselContainer.childElementCount - 1;
  } else {
    slidePosition--;
  }
  carouselContainer.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
});

nextButton.addEventListener('click', () => {
  if (slidePosition === carouselContainer.childElementCount - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  carouselContainer.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
});


const jobSearchForm = document.getElementById('jobSearchForm');
const titleInput = document.getElementById('titleInput');
const locationInput = document.getElementById('locationInput');
const searchResults = document.getElementById('searchResults');

jobSearchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = titleInput.value;
  const location = locationInput.value;

  // Simulated search results
  const results = [
    { 
    title: 'Front end developer', 
    location: 'india',
     img: 'https://img.freepik.com/free-vector/gradient-laptop-logo-template_23-2149001608.jpg?size=626&ext=jpg&ga=GA1.2.1548898612.1688737236&semt=ais' ,
     time: "full time",
     salary: "123",
     date: '23july 2023'
    },
    { 
    title: 'Full stack developer', 
    location: 'bangladesh',
     img: 'https://img.freepik.com/free-vector/gradient-laptop-logo-template_23-2149001608.jpg?size=626&ext=jpg&ga=GA1.2.1548898612.1688737236&semt=ais' ,
     time: "full time",
     salary: "123",
     date: '23july 2023'
    },
    { 
    title: ' software developer', 
    location: 'nepal',
     img: 'https://img.freepik.com/free-vector/gradient-laptop-logo-template_23-2149001608.jpg?size=626&ext=jpg&ga=GA1.2.1548898612.1688737236&semt=ais' ,
     time: "part time",
     salary: "143",
     date: '23july 2023'
    },
   
  ];

  showSearchResults(results);
});

function showSearchResults(results) {
  searchResults.innerHTML = '';

  if (results.length === 0) {
    searchResults.innerHTML = 'No results found.';
    return;
  }

  results.forEach(function(result) {
    const jobElement = document.createElement('div');
    jobElement.classList.add('job-container')
    jobElement.innerHTML = `<h3 >${result.title} </h3><p>${result.location}</p>`;
    searchResults.appendChild(jobElement);
  });
}