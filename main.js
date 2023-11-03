const blogItems = document.querySelectorAll('.blog-item');

blogItems.forEach((blogItem, index) => {
  const toggleButton = blogItem.querySelector('.toggle-button');
  const blogContent = blogItem.querySelector('.blog-content');
  let isExpanded = false;

  toggleButton.addEventListener('click', () => {
    if (isExpanded) {
      // Content is expanded, so hide it and change the button text to "Read More"
      blogContent.style.display = 'none';
      toggleButton.textContent = 'Read More';
    } else {
      // Content is collapsed, so show it and change the button text to "Read Less"
      blogContent.style.display = 'block';
      toggleButton.textContent = 'Read Less';

      // Move the expanded item to the top
      const parent = blogItem.parentElement;
      parent.prepend(blogItem); // Move the blog item to the beginning of its parent
    }

    // Toggle the state of isExpanded
    isExpanded = !isExpanded;
  });
});
