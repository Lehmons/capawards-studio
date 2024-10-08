// import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  type: 'document',
  name: 'news',
  title: 'News',
  // orderings: [orderRankOrdering],
  fields: [
    // orderRankField({type: 'work', hidden: true}),
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          `/news/${input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove double --
            // .replace(/[--]/g)
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
            .slice(0, 200)}`,
      },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
    },
    {
      title: 'Paragraph',
      name: 'paragraph',
      type: 'headingOneTwoThreeNormalSmall',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{type: 'imageBlock'}],
    },
    {
      name: 'videoBlock',
      title: 'Video Block',
      type: 'videoBlock',
    },

    // {
    //   title: "Manuscript",
    //   name: "manuscript",
    //   type: "array",
    //   of: [{ type: "manuscript" }],
    // },
    // {
    //   title: "Video Block",
    //   name: "videoBlock",
    //   type: "array",
    //   of: [{ type: "videoBlock" }],
    // },
  ],
  orderings: [
    {
      title: 'Release Date',
      name: 'releaseDate',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images[0].imageBlock.image.asset', //get the first image block of the array to use in media preview
    },
    prepare({title, media}) {
      return {
        title: title ? title : 'No title defined',
        media,
      }
    },
  },
}
