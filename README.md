# DSA Study Guide

A documentation website for Data Structures and Algorithms study, built with Docusaurus. Features syntax-highlighted code examples in multiple programming languages.

## Project Structure

```
dsa-study-guide/
├── docs/ # Documentation content
│   ├── data-structures/ # Data structures chapters
│   │   ├── _category_.json
│   │   ├── arrays.mdx
│   │   ├── linked-lists.mdx
│   │   ├── stacks.mdx
│   │   └── queues.mdx
│   ├── algorithms/ # Algorithm chapters
│   │   ├── _category_.json
│   │   ├── sorting.mdx
│   │   ├── searching.mdx
│   │   └── graph-algorithms.mdx
│   └── problems/ # Practice problems
│       ├── _category_.json
│       └── two-sum.mdx
├── examples/
│   ├── arrays.py
│   ├── arrays.ts
│   ├── linked_lists.py
│   └── linked_lists.ts
├── src/
│   └── components/ # Custom React components
├── static/ # Static assets (images, etc.)
│   └── img/
├── docusaurus.config.js # Docusaurus configuration
├── package.json
├── sidebars.js # Optional: Manual sidebar configuration
└── README.md
```

## Prerequisites

-   Node.js (version 16.14 or above)
-   npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/LuluBeatson/dsa-study-guide.git
cd dsa-study-guide
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run start
```

The site will be available at http://localhost:3000. Most changes are reflected live without having to restart the server, and a browser window will open automatically.

## Adding Content

### Create a New Page

1. Add a new markdown file in the appropriate directory:

````markdown
---
sidebar_position: 1
title: Your Title
description: Page description
---

# Your Content Here

Regular markdown content...

## Code Examples

<Tabs>
  <TabItem value="py" label="Python">
    ```python
    def example():
        return "Hello, World!"
    ```
  </TabItem>
  <TabItem value="ts" label="TypeScript">
    ```typescript
    function example(): string {
        return "Hello, World!";
    }
    ```
  </TabItem>
</Tabs>
````

### Adding Code Examples

You can include code examples either directly in the markdown or by referencing external files:

````markdown
# Direct code

```python
def example():
    pass
```

# Referenced code

```python reference
@site/examples/your_file.py
```
````

## Building for Production

Build the website into static files:

```bash
npm run build
```

This command generates static content into the `build` directory which can be served using any static contents hosting service.

Preview the production build:

```bash
npm run serve
```

## Deployment

### GitHub Pages

1. Update `docusaurus.config.js`:

```javascript
module.exports = {
    url: "https://username.github.io",
    baseUrl: "/repo-name/",
    organizationName: "username",
    projectName: "repo-name",
    deploymentBranch: "gh-pages",
};
```

2. Deploy using one of these methods:

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

### Vercel/Netlify

1. Connect your GitHub repository to Vercel or Netlify
2. They will automatically detect Docusaurus and configure the build
3. Your site will deploy automatically when you push to main

## Customization

### Sidebar Configuration

The sidebar is automatically generated from the file structure. To customize, create or modify category metadata:

```json
// docs/category-name/_category_.json
{
    "label": "Display Name",
    "position": 1,
    "link": {
        "type": "generated-index",
        "description": "Category description"
    }
}
```

### Theme Configuration

Modify `docusaurus.config.js` to customize the theme:

```javascript
module.exports = {
    themeConfig: {
        // Syntax highlighting
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            darkTheme: require("prism-react-renderer/themes/dracula"),
            additionalLanguages: ["python", "typescript", "go"],
        },
        // Navigation bar
        navbar: {
            title: "DSA Study Guide",
            logo: {
                alt: "Logo",
                src: "img/logo.svg",
            },
        },
    },
};
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

[MIT License](LICENSE)
