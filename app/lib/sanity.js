import {createClient} from '@sanity/client';

const projectId = '9y2uxlqe';
const dataset = 'production';
const apiVersion = '2023-01-01';

 const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn:true,
})
export default client;