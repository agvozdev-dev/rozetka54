import React, {useEffect} from 'react'
import './style.scss'
import {Fancybox as NativeFancybox} from '@fancyapps/ui/dist/fancybox.esm.js'
import "@fancyapps/ui/dist/fancybox.css";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import classNames from "classnames";
import Container from "/components/shared/Container";
import HighlighterText from "/components/shared/HighlighterText";
import Title from "/components/shared/Title";

type ImageGalleryProps = {}

function Fancybox(props: any) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
}

const ImageGallery = () => {
  const edges = useStaticQuery(query).allMdx.edges

  const options = {
    Thumbs: false,
    Toolbar: false,
    Image: {
      zoom: false,
      click: false,
      wheel: "slide",
    }
  }

  return (
    <section className="gallery">
      <Container>
        <Title
          title="Примеры наших работ"
          subtitle="Работаем на результат"
          titleSearchWords={['работ']}
        />
        <ul className='gallery__list'>
          {edges.map((edge: any, edgeIndex: number) => (
              <li className='gallery__item' key={`gallery__item-${edgeIndex}`}>
                <Fancybox options={options}>
                  {edge.node.frontmatter.images.map((image: any, imageIndex: number) => {
                    const hidden = imageIndex !== 0 ? "gallery__content--hidden" : ""
                    const classes = classNames("gallery__content", hidden)
                    return (
                      <div className={classes}>
                        <GatsbyImage className="gallery__image rounded"
                                     key={`gallery__image-${imageIndex}`}
                                     alt={edge.node.frontmatter.image_alt}
                                     image={getImage(image)}
                                     data-fancybox={`gallery-${edgeIndex}`}/>
                        <div className='gallery__description'>
                          <HighlighterText
                            className="gallery__title"
                            text={`Объект: ${edge.node.frontmatter.facility}`}
                            searchWords={[edge.node.frontmatter.facility]}
                          />

                          <p className='gallery__text'>
                            {edge.node.frontmatter.description}
                          </p>
                          <HighlighterText
                            className="gallery__date"
                            text={`Объект сдан: ${edge.node.frontmatter.date}`}
                            searchWords={[edge.node.frontmatter.date]}
                          />
                        </div>
                      </div>
                    )
                  })}
                </Fancybox>
              </li>
            )
          )}
        </ul>
      </Container>
    </section>

  )
}

export const query = graphql`
query GalleryBySlug {
  allMdx(filter: {frontmatter: {type: {eq: "examples-of-work"}}}) {
    edges {
      node {
        frontmatter {
          date
          description
          facility
          image_alt
          images {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}
`

export default ImageGallery


{/*{edges.map((edge: any, index: number) => {*/
}
{/*  return (*/
}
{/*    // <div*/
}
{/*    //   data-caption={edge.node.frontmatter.description}*/
}
{/*    //   data-fancybox="gallery"*/
}
{/*    // >*/
}
{/*    //   <img className="rounded" src="https://lipsum.app/id/1/200x150"/>*/
}
{/*    // </div>*/
}
{/*  //<GatsbyImage className="temp rounded" alt={edge.node.frontmatter.image_alt} image={getImage(edge.node.frontmatter.images[0])} data-caption={edge.node.frontmatter.description} data-fancybox="gallery" />*/
}
{/*  // <li className="partners__item" key={`partners__item-${index}`}>*/
}
{/*  //   <GatsbyImage alt='Логотип партнера' image={getImage(edge.node)}/>*/
}
{/*  // </li>*/
}
{/*  )*/
}
{/*})}*/
}

{/*<a*/
}
{/*  data-caption="Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in. Sed consectetur tellus egestas, consequat dolor at, tempus augue. "*/
}
{/*  data-fancybox="gallery"*/
}
{/*  href="https://lipsum.app/id/1/800x450"*/
}
{/*>*/
}
{/*  <img className="rounded" src="https://lipsum.app/id/1/200x150"/>*/
}
{/*</a>*/
}
{/*<a*/
}
{/*  className="hidable"*/
}
{/*  data-caption="Short caption"*/
}
{/*  data-fancybox="gallery"*/
}
{/*  href="https://lipsum.app/id/2/800x450"*/
}
{/*>*/
}
{/*  <img className="rounded" src="https://lipsum.app/id/2/200x150"/>*/
}
{/*</a>*/
}
{/*<a*/
}
{/*  className="hidable"*/
}
{/*  data-caption=""*/
}
{/*  data-fancybox="gallery"*/
}
{/*  href="https://lipsum.app/id/3/800x450"*/
}
{/*>*/
}
{/*  <img className="rounded" src="https://lipsum.app/id/3/200x150"/>*/
}
{/*</a>*/
}
{/*<a*/
}
{/*  className="hidable"*/
}
{/*  data-caption=""*/
}
{/*  data-fancybox="gallery"*/
}
{/*  href="https://lipsum.app/id/4/800x450"*/
}
{/*>*/
}
{/*  <img src="https://lipsum.app/id/4/200x150"/>*/
}
{/*</a>*/
}
{/*<a*/
}
{/*  className="hidable"*/
}
{/*  data-caption=""*/
}
{/*  data-fancybox="gallery"*/
}
{/*  href="https://lipsum.app/id/5/800x450"*/
}
{/*>*/
}
{/*  <img className="rounded" src="https://lipsum.app/id/5/200x150"/>*/
}
{/*</a>*/
}
{/*<a*/
}
{/*  className="hidable"*/
}
{/*  data-caption=""*/
}
{/*  data-fancybox="gallery"*/
}
{/*  href="https://lipsum.app/id/6/800x450"*/
}
{/*>*/
}
{/*  <img className="rounded" src="https://lipsum.app/id/6/200x150"/>*/
}
{/*</a>*/
}
{/*<a*/
}
{/*  className="hidable"*/
}
{/*  data-caption=""*/
}
{/*  data-fancybox="gallery"*/
}
{/*  href="https://lipsum.app/id/7/800x450"*/
}
{/*>*/
}
{/*  <img className="rounded" src="https://lipsum.app/id/7/200x150"/>*/
}
{/*</a>*/
}