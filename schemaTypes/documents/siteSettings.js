export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'ogTitle',
      title: 'OG Default Title',
      type: 'string',
      description: 'Default social share title',
    },
    {
      name: 'ogImage',
      title: 'OG Default Image',
      type: 'image',
      description: 'Default social share image (1200x630px recommended)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      blocks: 'blocks.length',
    },
    prepare({title}) {
      return {
        title: title ? title : 'Site `Settings',
      }
    },
  },
}
