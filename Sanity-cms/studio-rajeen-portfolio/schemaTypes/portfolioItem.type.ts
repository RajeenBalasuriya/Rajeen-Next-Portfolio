import { defineField, defineType } from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Portfolio Items',
      type: 'array',
      of: [
        defineField({
          name: 'portfolioItem',
          title: 'Portfolio Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'color',
              title: 'Gradient Color',
              type: 'string',
              description: 'CSS gradient classes (e.g., from-red-300 to-blue-300)',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
});
