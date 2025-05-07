import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/propuestas/` directory.
	loader: glob({ base: './src/content/propuestas', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		heroImage: z.string().optional(),
	}),
});


const planilla = defineCollection({
	// Load Markdown and MDX files in the `src/content/propuestas/` directory.
	loader: glob({ base: './src/content/planilla', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
		order: z.number().optional(),
	}),
});

export const collections = {propuestas: blog,planilla};