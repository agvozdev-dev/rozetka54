import {IGatsbyImageData} from "gatsby-plugin-image";

export class MainSlider {
    title: string
    description: string
    to: string
    image: IGatsbyImageData

    constructor(title: string, description: string, to: string, image: IGatsbyImageData) {
        this.title = title
        this.description = description
        this.to = to
        this.image = image
    }
}