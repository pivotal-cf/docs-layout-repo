# docs-layout-repo

This is the centralized layout repository for documentation published to docs.pivotal.io. Typically,
the contents of this repository are used to style and format documentation sets published with
[Bookbinder](https://github.com/pivotal-cf/bookbinder), but the contents can be used with other
publishing sytems, too.

This repository contains layouts, formatting, and styles used across documentation sets published
to docs.pivotal.io.

Most of the remainder of this README file is targeted at Bookbinder users.

## Branches

| Branch    | Usage |
|-----------|-------|
| main    | "PCF" publications to docs.pivotal.io. Default. |
| edge      | Pre-release publications |
| data-docs | Data Services publications |
| no-index  | "PCF" publications that should no longer be indexed by search engines. |
| no-index-data-docs  | Data Services publications that should no longer be indexed by search engines. |

---

## Usage

Content specific to a particular Bookbinder "book" should be stored in the appropriate
directory of that book's repository and not in this repository. For example, subnav templates for
the [docs-book-healthwatch](https://github.com/pivotal-cf/docs-book-healthwatch/) book are stored
in the [master_middleman/source/subnavs/](https://github.com/pivotal-cf/docs-book-healthwatch/master_middleman/source/subnavs/) directory of the docs-book-healthwatch book.

To include this centralized layout repository in your book, add the following lines to your book's config.yml:

```
layout_repo: pivotal-cf/docs-layout-repo
layout_repo_ref: main
```

When you run `bookbinder bind`, the files from docs-layout-repo are used to format and style the
resulting book unless overwritten by the book's own layout files.

## Overrides

Make all book-specific overrides in the files listed below in your book's `master_middleman/source`
directory.

### Styles

Make book-specific overrides by creating and editing copies of the following files in your book:

* `stylesheets/book-styles.css.scss`: To redefine or add styles (classes, elements, etc.)

* `stylesheets/partials/_book-base-values.scss`: To redefine or add base values, such as specific colors, fonts, or sizes.

    Example:
    ```
    $navy: #333333;
    ```

* `stylesheets/partials/_book-vars.scss`: To redefine or add variables that point to the variable-ized base values in `_vars.scss`. These are found under ["BEGIN BASE VALUES"](https://github.com/pivotal-cf/docs-layout-repo/blob/main/source/stylesheets/partials/_vars.scss#L5) in the `_vars.scss` file  or within `_book-base-values.scss`.

    Example:
    ```
    $color-bg: $navy;
    ```

### Javascript

Make book-specific overrides by creating and editing a copy of `javascripts/book.js` in your book.

If any additional libraries must be added to your book, for example `my-javascript-file.js`, include
them in the book's `javascripts` directory, then require them in your book's
`javascripts/book.js`file.

    Example:
    ```
    \\= require 'my-javascript-file'
    ```

### Layout

Most legacy Pivotal books use the layout defined in this repository's `layouts/layout.erb` file,
and define partials and template variables to alter the layout contents when necessary.

The `layouts/layout.erb` file in this repository reference the following partials and template variables defined at the book level. If these partials and template variables are not defined in
your book, the value used is an empty string.

#### Template variables:

* `book_title_short`: Used in page's title on browser tab
* `cse_id`: Google Custom Search Engine ID
* `domain_name`: Domain name for the book. Used to scope the Google Custom Search
* `ga_account_id`: Google Analytics account ID
* `product_link`: Generic text linking to product site. Example: "Pivotal Application Services" 
* `support_call_to_action`: "Call to action text" linking to support site. Example "Need Support?"
* `support_link`: Generic text linking to support site. Example: "Support"

#### Partials:

* `layouts/_book-footer.erb`: Copyright and support information in footer
* `layouts/_book-search.erb` [**Optional**]: Google Custom Search Engine box
* `layouts/_book-title.erb`: On home page, how the title and logo are displayed
