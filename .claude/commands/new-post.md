---
name: new-post
description: Skill to add a new post
---

# new-post

Create a new blog post for the Gatsby blog.

## Instructions

When this skill is invoked, follow these steps:

1. **Gather information** - Ask the user for:
   - Post title (required)
   - Post slug (suggest a kebab-case version of the title, but let user override)
   - Tags (comma-separated, optional)
   - Whether to include comments (default: yes)

2. **Create directory structure**:
   - Create `content/posts/[slug]/` directory
   - Ensure the slug is in kebab-case format

3. **Generate the post file**:
   - Create `content/posts/[slug]/index.mdx` with:

     ```mdx
     ---
     title: [User-provided title]
     date: [Current date in YYYY-MM-DD format]
     tags:
       - [Tag1]
       - [Tag2]
     ---

     [Post content goes here]

     import Comments from "components/Comments";

     <Comments />
     ```

4. **Inform the user**:
   - Show the created file path
   - Remind them they can:
     - Add images to the same directory
     - Run `npm run develop` to preview
     - Remove the Comments component if not needed

5. **Open the file** in the editor so they can start writing.

## Example Usage

User: `/new-post`

Assistant should:

- Ask for title, slug, and tags
- Create the directory and file
- Open the file for editing
