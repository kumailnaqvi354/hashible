import React from 'react';
import { LightgalleryItem } from 'react-lightgallery';

const Gallery = () => {
    return (
        <section id="gallery" className="light-bg full-width-effct">
            <h2 className="section-heading">
                GALLERY
            </h2>


            <div className="section-gallery">

                <LightgalleryItem src={require('../../assets/images/92gallery.png')}>
                    <img src={require('../../assets/images/92gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/110gallery.png')}>
                    <img src={require('../../assets/images/110gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/111gallery.png')}>
                    <img src={require('../../assets/images/111gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/112gallery.png')}>
                    <img src={require('../../assets/images/112gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/113gallery.png')}>
                    <img src={require('../../assets/images/113gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/114gallery.png')}>
                    <img src={require('../../assets/images/114gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/115gallery.png')}>
                    <img src={require('../../assets/images/115gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/116gallery.png')}>
                    <img src={require('../../assets/images/116gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/117gallery.png')}>
                    <img src={require('../../assets/images/117gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/118gallery.png')}>
                    <img src={require('../../assets/images/118gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/119gallery.png')}>
                    <img src={require('../../assets/images/119gallery.png')} alt="" />
                </LightgalleryItem>

                <LightgalleryItem src={require('../../assets/images/120gallery.png')}>
                    <img src={require('../../assets/images/120gallery.png')} alt="" />
                </LightgalleryItem>

                {/* <a href="#">
                    <img src={require('../../assets/images/92gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/110gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/111gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/112gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/113gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/114gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/115gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/116gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/117gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/118gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/119gallery.png')} alt="" />
                </a>

                <a href="#">
                    <img src={require('../../assets/images/120gallery.png')} alt="" />
                </a> */}
            </div>
        </section>
    )
}

export default Gallery