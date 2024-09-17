import { defineArrayMember, defineField, defineType } from "sanity";

export const album = defineType({
    title: "Album",
    name: "album",
    type: "document",
    fields: [
        defineField({
            title: "Tittel",
            name: "title",
            type: "string"
        }),
        defineField({
            title: "Coverbilde",
            name: "coverimage",
            type: "image"
        }),
        defineField({
            title: "Publiseringsår",
            name: "publishyear",
            type: "string"
        }),
        defineType({
            title: "Spor",
            name: "tracks",
            type: "array",
            of: [
                {type: 'reference', to: [{type: 'song'}]}
            ]
        })
    ]
})