import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        defineField({
          name: 'job',
          title: 'Job',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Job Title',
            }),
            defineField({
              name: 'description',
              type: 'string',
              title: 'Description',
            }),
            defineField({
              name: 'duration',
              type: 'string',
              title: 'Duration',
            }),
            defineField({
              name: 'company',
              type: 'string',
              title: 'Company',
            }),
          ],
        }),
      ],
    }),
  ],
})
