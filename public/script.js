function openEducation() {
    document.getElementById('educationSection').classList.toggle('hidden');
  }
   
  function showCategory(category) {
    document.getElementById('categoryTitle').textContent = category + " Results";
    var categoryContent = document.getElementById('categoryContent');
    categoryContent.innerHTML = ""; // Clear previous content
   
    if (category === '10th') {
      categoryContent.innerHTML = `
        <p>Andhra pradesh Board SSC Exam Result </p>  <p><a href="https://andhra-pradesh.indiaresults.com/bseap/"> AP Board SSC Exam Result</a></p>
        <p>Telangana SSC Exam Result below</p>        <p><a href="https://telangana.indiaresults.com/bse-telangana/"> Telangana SSC Exam Result</a></p>
      `;
    } else if (category === 'Inter') {
      categoryContent.innerHTML = `
        <p>AP Intermediate Results </p>  <p><a href="https://andhra-pradesh.indiaresults.com/bieap/"> AP Board Inter mediate </a></p>
        <p>Telanagana Intermediate Results </p>  <p><a href="https://telangana.indiaresults.com/"> Telanagana Board Inter mediate </a></p>
      `;
    } else if (category === 'Btech') {
      categoryContent.innerHTML = `
        <p>B.Tech Resources</p>
        <p><a href="#">Engineering Subjects</a></p>
        <p><a href="#">Practical Guides</a></p>
      `;
    } else if (category === 'Degree') {
      categoryContent.innerHTML = `
        <p>Degree Programs</p>
        <p><a href="#">Bachelor's Programs</a></p>
        <p><a href="#">Master's Programs</a></p>
      `;
    } else if (category === 'EntranceExam') {
      categoryContent.innerHTML = `
        <p>Entrance Exam Links:</p>
        <p><a href="#">"http://www.apsche.com">EAMCET</a></p>
        <p><a href="#">POLYTECHNIC</a></p>
        <p><a href="#">GATE</a></p>
      `;
    }
   
    document.getElementById('categoryResults').classList.remove('hidden');
  }
   
  function searchContent() {
    var searchInput = document.getElementById('searchInput').value;
    console.log("Search for: " + searchInput);
    // Placeholder for search functionality implementation
  }