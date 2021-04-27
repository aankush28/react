import React from 'react';
function Home(){
    return(
        <div>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://miro.medium.com/max/3960/0*HICLyAdNSIyT0ODU.jpg" class="d-block w-100" alt="..." width="auto" height="520px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="text-info">Frontend</h5>
        <p>we make your websit good and creative</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://content.techgig.com/thumb/msid-77690477,width-860,resizemode-4/Roadmap-to-become-a-successful-web-developer.jpg?85576" class="d-block w-100" alt="..." height="520px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Backend</h5>
        <p>we make your surver always do good and runing fast</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://content.techgig.com/thumb/msid-76243434,width-860,resizemode-4/24-Programming-languages-that-pay-top-salaries.jpg?150543" class="d-block w-100" alt="..." height="520px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Any programing language</h5>
        <p>we are also know JAVA, C++,PYTON,PHP,JAVASCRIPT,NOJE.JS,ECT</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="">
  
  
</div>
<div class="card">
  <div class="card-header">
  <h1>YOU CAN BE SEE MY LATES PROJECT</h1>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p><a href="https://royalguptayes.github.io/love/new.html " >
  <button type="button" class="btn btn-outline-success bg-warning q"id="div3" >Love CALCULATER %</button>
  </a>
  <br/>
  <a href="https://royalguptayes.github.io/a/a.html" >
  <button type="button" class="btn btn-outline-info bg-warning w" id="div1">About me as html</button>
  </a>
  <a href="https://royalguptayes.github.io/akgupta/royalgupta.html">
  <button type="button" class="btn btn-outline-dark bg-warning e" id="div2">my First hostsite</button>
  </a></p>
      <footer class="blockquote-footer">this by <cite title="Source Title">A K GUPTA</cite></footer>
    </blockquote>
  </div>
</div>
        </div>
    )
}
export default Home;