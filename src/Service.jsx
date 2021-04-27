import React from 'react';
function Service(){
    return(
        <div>
  <section class="py-5">
      <div class="container py-3 py-lg-4">
        <h2 class="text-center mb-4"> Feature <span class="fw-light">Highlights</span></h2>
        <div class="row text-center pt-4">
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://www.testingbrain.com/wp-content/uploads/2015/06/html5_tutorial_pdf_training.png" width="90" alt="Gulp icon"/>
            <h6>HTML</h6>
            <p class="fs-ms text-muted mb-0">HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" width="90" alt="Sass icon"/>
            <h6>CSS</h6>
            <p class="fs-ms text-muted mb-0">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" width="90" alt="Pug icon"/>
            <h6>SASS & SCSS</h6>
            <p class="fs-ms text-muted mb-0">Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://camo.githubusercontent.com/a664defdd5c2ec93a3fbfb51e0f2aaafa5dc57bf1e13aa47456ced037b3cebe8/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" width="90" alt="Bootstrap icon"/>
            <h6> Bootstrap 5</h6>
            <p class="fs-ms text-muted mb-0">Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://colinstodd.com/images/posts/matcss-min.png" width="90" alt="Web Components icon"/>
            <h6>Materialize css</h6>
            <p class="fs-ms text-muted mb-0">Materialize is a modern responsive CSS framework based on Material ... When using Sass, you can change the color scheme of your site extremely quickly</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" width="90" alt="Mobile Friendly icon"/>
            <h6>JAVASCRIPT</h6>
            <p class="fs-ms text-muted mb-0">JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="90" alt="Google Fonts icon"/>
            <h6>React js</h6>
            <p class="fs-ms text-muted mb-0">React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="data:image/png;base64,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" width="90" alt="Touch icon"/>
            <h6>Matarial UI</h6>
            <p class="fs-ms text-muted mb-0">In the era of touch screens it's important to ensure great user experience on handheld devices, especially when it comes to such frequently used interface component as slider.</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" width="90" alt="Vector icon"/>
            <h6>Visual Studio Code</h6>
            <p class="fs-ms text-muted mb-0">Visual Studio Code is a freeware source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="http://pngimg.com/uploads/github/github_PNG40.png" width="90" alt="HTML5 icon"/>
            <h6>GitHub</h6>
            <p class="fs-ms text-muted mb-0">GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://yt3.ggpht.com/ytc/AAUvwni7c5gibwQBa26X6WeVYcZCgAY_jPumSmJLntMB=s900-c-k-c0x00ffffff-no-rj" width="90" alt="JavaScript icon"/>
            <h6>W3Schools</h6>
            <p class="fs-ms text-muted mb-0">W3Schools is an educational website for learning coding online. Content includes tutorials and references relating to HTML, CSS, JavaScript, JSON, PHP, Python, AngularJS, React.js, SQL, Bootstrap, Sass, Node.js, jQuery, XQuery, AJAX, XML, Active Server Pages, R, Raspberry Pi, C++, C# and Java</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2"><img class="inline-block mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/1280px-JQuery-Logo.svg.png" width="90" alt="Documentation icon"/>
            <h6>jQuery</h6>
            <p class="fs-ms text-muted mb-0">jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites</p>
          </div>
        </div>
        <h6 class="text-center">And much more...</h6>
      </div>
    </section>
        </div>
    )
}
export default Service;