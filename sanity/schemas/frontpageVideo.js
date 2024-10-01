import { defineArrayMember, defineField, defineType } from "sanity";

export const fpvideo = defineType({
    title: "Frontpage Video",
    name: "fpvideo",
    type: "document",
    fields: [
        defineField({
            title: "Tittel",
            name: "title",
            type: "string"
        }),
        defineField({
            title: "Youtube ID",
            name: "ytid",
            type: "string"
        }),
        defineField({
            title: "Show on Frontpage",
            name: "visible",
            type: "boolean",
            initialValue: true
        }),
    ]
})