import {IGatsbyImageData} from "gatsby-plugin-image";

export class MainSlider {
    title: string
    description: string
    to: string
    image: IGatsbyImageData
    order: number

    constructor(title: string, description: string, to: string, image: IGatsbyImageData, order: number) {
        this.title = title
        this.description = description
        this.to = to
        this.image = image
        this.order = order
    }
}