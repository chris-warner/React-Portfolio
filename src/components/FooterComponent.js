import React from 'react';
import './FooterComponent.css';

function FooterComponent() {

return (
  <footer id="sticky-footer" class=" footer py-4 bg-dark text-white-50">
    <div class="container text-center">
      {/* <small>Follow me on: </small> */}
     <small> <a href="github.com/chris-warner">GitHub </a>
      <a href="https://www.linkedin.com/in/chris-warner-developer/">LinkedIn</a></small>

    </div>
  </footer>
);
}

export default FooterComponent;