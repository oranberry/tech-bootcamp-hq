# Favorite Foods List

- Briefly explain Bootstrap for the students that haven't watched the module content yet. "Bootstrap is called a front-end toolkit, which is basically developer-speak for CSS and Javascript that someone else wrote that we can use freely in our own projects."
- "Let's take a look at a widely used Boostrap component: the list group." Open Bootstrap list group docs https://getbootstrap.com/docs/5.1/components/list-group/, show students the first example, and examine the code snippet.
- "What we see here is the direct result of CSS styling. Bootstrap is just CSS and JS that someone else wrote for us. The classes we see here have CSS style rules associated with them. That said, let's try to recreate the styles we see on this list group from scratch."

- Add a class of `custom-list-group` to the `<ul>`
- Add a class of `custom-list-group-item` to each `<li>` in the list
- Write rules for each class that will emulate the style of Bootstrap's default list group 
- "We can absolutely write CSS styles that look as good as Bootstrap's  ourselves, but this can take a lot of time! Let's try the same thing the easier way with Bootstrap."
- Delete/comment out all the styles in `style.css` 
- Add the Bootsrap CDN links to `index.html`. Run the project and note the changes. "This doesn't look anything like the docs! That's because we aren't using the correct _class names_."
- Remove the `custom-` prefixes from the list elements, leaving the correct Bootstrap classes. Run the repl.
- Point out the lack of margins. Mention that this is where the `container` class comes in come in. Add the `container` class to the `<main>` tag and run the repl
- Add a few different classes to the list that will modify its appearance (e.g. `active`, `disabled`, `list-group-flush`, `list-group-numbered`, `list-group-item-success`)
