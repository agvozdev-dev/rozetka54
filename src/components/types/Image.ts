import {IGatsbyImageData} from "gatsby-plugin-image";

export class Image {
    name: string
    image: IGatsbyImageData

    constructor(name: string, image: IGatsbyImageData) {
        this.name = name
        this.image = image
    }
}
