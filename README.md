# Blogst

Blogst is a simple blog site statically generated with Next.js. Visit the demo [here](https://blogst.vercel.app/).

The blog posts are fetched from the data/blogs directory with the **fs** library and then are parsed with **gray-matter**. After the parse, **remark** is used to make sense of the markdown contents of the file, which are then displayed on the blog pages using **markdown-to-jsx**.

The styling is done with **Sass** using the BEM convention. The site was designed with **Figma**, which was my first attempt at using it for a project, hence the simple site and design.
