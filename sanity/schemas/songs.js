import { defineField, defineType } from "sanity";

export const song = defineType({
    title: "Sang",
    name: "song",
    type: "document",
    fields: [
        defineField({
            title: "Tittel",
            name: "title",
            type: "string"
        }),
        defineField({
            title: "Linknavn",
            name: "slug",
            type: "slug",
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            }
        }),
        defineField({
            title: "Sted",
            name: "location",
            type: "geopoint"
        }),
        defineField({
            title: "By/Stedsnavn",
            name: "city",
            type: "string"
        }),
        defineField({
            title: "Land",
            name: "country",
            type: "string"
        }),
        defineField({
            title: "Zoomnivå",
            name: "zoom",
            type: "number"
        }),
        defineField({
            title: "Marker-fil",
            name: "markerfile",
            type: "string"
        }),
        defineField({
            title: "Marker-offset X",
            name: "markeroffsetx",
            type: "number"
        }),
        defineField({
            title: "Marker-offset Y",
            name: "markeroffsety",
            type: "number"
        }),
        defineField({
            title: "Tekst",
            name: "lyrics",
            type: "blockContent"
        }),
        defineField({
            title: "Thumbnailbilde",
            name: "thumbnail",
            type: "image"
        }),
        defineField({
            title: "Spotify Embed-link",
            name: "spotify",
            type: "string"
        })
    ]
})