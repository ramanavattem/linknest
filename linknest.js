// Function to handle click on "Education" button
document.querySelector('.education-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Open a new window or tab with education-related content
  var educationWindow = window.open('', 'educationWindow', 'width=800,height=600');

  // HTML content for education window
  var educationContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Education Resources - LinkNest</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f0f0f0;
              }
              .container {
                  width: 80%;
                  margin: 0 auto;
                  padding: 20px;
              }
              header {
                  background-color: #333;
                  color: #fff;
                  padding: 10px 0;
                  text-align: center;
              }
              header h1 {
                  margin: 0;
              }
              .filter-btn {
                  margin: 10px;
                  padding: 10px 20px;
                  background-color: #333;
                  color: #fff;
                  border: none;
                  cursor: pointer;
              }
              .filter-btn:hover {
                  background-color: #555;
              }
              .content {
                  padding: 20px 0;
              }
              footer {
                  background-color: #333;
                  color: #fff;
                  text-align: center;
                  padding: 10px 0;
                  position: fixed;
                  bottom: 0;
                  width: 100%;
              }
          </style>
      </head>
      <body>
          <header>
              <div class="container">
                  <h1>Education Resources</h1>
                  <button class="filter-btn" data-category="10th">10th</button>
                  <button class="filter-btn" data-category="Inter">Inter</button>
                  <button class="filter-btn" data-category="B.Tech">B.Tech</button>
              </div>
          </header>

          <section class="content">
              <div class="container">
                  <div id="education-content">
                      <p>Select a category to see content.</p>
                  </div>
              </div>
          </section>

          <footer>
              <div class="container">
                  <p>Footer: About Us, Contact, Social Media</p>
              </div>
          </footer>

          <script>
              // JavaScript for filtering content based on category
              var filterButtons = document.querySelectorAll('.filter-btn');
              var educationContent = document.getElementById('education-content');

              filterButtons.forEach(function(button) {
                  button.addEventListener('click', function() {
                      var category = this.getAttribute('data-category');
                      // Simulate loading content based on category (replace with actual content loading)
                      educationContent.innerHTML = '<p>Filtered content for ' + category + '</p>';
                  });
              });
          </script>
      </body>
      </html>
  `;

  // Write the content to the new window
  educationWindow.document.write(educationContent);
  educationWindow.document.close(); // Close the document for writing
});