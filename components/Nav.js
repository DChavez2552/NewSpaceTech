//jshint esversion:6

export default Links => `
<nav>
<i class="fa-bars"></i>
<ul class="navbar">
${Links
    .map(
      (link) => `<a href="/${link.title}" data-navigo>${link.text}</a>`
    )
    .join()}
</ul>
</nav>
`;
