document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission for new posts
    const postForm = document.getElementById('post-form');
    if (postForm) {
      postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const postData = {
          title: document.getElementById('title').value,
          excerpt: document.getElementById('excerpt').value,
          content: document.getElementById('content').value,
          category: document.getElementById('category').value
        };
        
        // In a real app, this would send to your backend
        console.log('Post data:', postData);
        alert('Post created successfully! (This would save to DB in real app)');
        window.location.href = '/';
      });
    }
    
    // Simulate loading posts from API
    if (document.getElementById('posts-container')) {
      fetchPosts();
    }
  });
  
  function fetchPosts() {
    // Simulated API call
    setTimeout(() => {
      const postsContainer = document.getElementById('posts-container');
      postsContainer.innerHTML = `
        <div class="col-md-6">
          <div class="card post-card">
            <div class="card-body">
              <h5 class="card-title">5 Morning Yoga Poses for Beginners</h5>
              <p class="card-text">Start your day with these simple yoga poses to improve flexibility and mental clarity.</p>
              <a href="/post/1" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card post-card">
            <div class="card-body">
              <h5 class="card-title">Healthy Meal Prep Ideas</h5>
              <p class="card-text">Simple recipes that will keep you energized all week while saving you time.</p>
              <a href="/post/2" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      `;
    }, 500);
  }