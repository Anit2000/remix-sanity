import React from "react";
import client from "./sanity";
import imageUrlBuilder from '@sanity/image-url';


const builder = imageUrlBuilder(client);

export default function urlFor(source){
    return builder.image(source);
}
