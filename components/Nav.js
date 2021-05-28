//jshint esversion:6

export default Links => `
<nav>
<i class="fas fa-bars"></i>
<ul class="hidden--mobile nav-links">
${Links
    .map(
      (link) => `<a href="/${link.title}" data-navigo>${link.text}</a>`
    )
    .join()}
</ul>
</nav>
`;
