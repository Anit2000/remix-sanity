export default {
    name:'product',
    title:'Product',
    type: 'document',
    fields:[
        {
            type:'string',
            name:'title',
            title:'Title'
        },
        {
            type:'array',
            name:'images',
            title:'Product Images',
            of:[{type:'image'}]
        },
        {
            type:'number',
            name:'compare_price',
            title:'Compare Price'
        },
        {
            type:'number',
            name:'sale_price',
            title:'Sale Price'
        },
        {
            type:'slug',
            name:'slug',
            title:'Slug',
            options:{
                source:'title',
            }
        }
    ]
}