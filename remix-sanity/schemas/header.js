export default{
    name:'header',
    title:'Header',
    type:'document',
    fields:[
        {
            type:'string',
            name:'title',
            title:'Title'
        },
        {
            type:'image',
            name:'logo',
            title:'Logo Image'
        },
        {
            type:'array',
            name:'navigation',
            of:[
                {
                    type:'object',
                    name:'link',
                    fields:[
                        {
                            type:'string',
                            name:'title',
                            title:'Title'
                        },
                        {
                            type:'url',
                            name:'url',
                            title:'Redirection Link'
                        }
                    ]
                }
            ]
        },
        {
            type:'boolean',
            name:'search',
            title:'Display Search'
        },
        {
            type:'boolean',
            name:'cart',
            title:'Display Cart'
        }
    ]
}