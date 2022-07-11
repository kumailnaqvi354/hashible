import React from 'react'

const FAQ = () => {
    function toggleAccordion(event) {
        let items;
        items = document.getElementsByTagName('article');
        const article_id = event.currentTarget.getAttribute('id');

        for (let i = 0; i < items.length; i++) {
            if (items[i].id !== article_id)
                items[i].className = "accordion-parent collapsed";
        }

        if (event.currentTarget.className === "accordion-parent selected expanded") {
            event.currentTarget.className = "accordion-parent collapsed"
        }
        else {
            event.currentTarget.className = "accordion-parent selected expanded"
        }        
    }

    return (
        <section id="faq" className="light-bg full-width-effct ">
            <h2 className="section-heading">
                FAQ
            </h2>
            <section className="card">
                <article id="article-1" className="accordion-parent collapsed" onClick={toggleAccordion}>
                    <h3 >What is Chillin' Ape Surf Club?</h3>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu lectus quis mauris malesuada fringilla.
                            Praesent non tellus massa. Phasellus at neque et massa elementum sodales. Quisque neque enim, dignissim at
                            molessllis. Pellentesque blandit quam imperdiet lorem lobortis, at pharetra massa condimentum. Maecenas ac nibh
                            mi. Donec suscipit dolor vitae faucibus venenatis.</p>
                    </div>
                </article>
                <article id="article-2" className="accordion-parent collapsed" onClick={toggleAccordion}>
                    <h3>What is Chillin' Ape Surf Club?</h3>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu lectus quis mauris malesuada fringilla.
                            Praesent non tellus massa. Phasellus at neque et massa elementum sodales. Quisque neque enim, dignissim at
                            molestie quis, lobortis eu elit. </p>
                    </div>
                </article>
                <article id="article-3" className="accordion-parent collapsed" onClick={toggleAccordion}>
                    <h3>What is Chillin' Ape Surf Club?</h3>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu lectus quis mauris malesuada fringilla.
                            Praesent non tellus massa. Phasellus at neque et massa elementum sodales. Quisque neque enim, dignissim at
                            molestie quis, lobortis eu elit. Sed ornare ultrices tortor sed mollis. Pellentesque blandit quam imperdiet lorem
                            lobortis, at pharetra massa condimentum. Maecenas ac nibh mi. Donec suscipit dolor vitae faucibus venenatis.</p>
                    </div>
                </article>
                <article id="article-4" className="accordion-parent collapsed" onClick={toggleAccordion}>
                    <h3>What is Chillin' Ape Surf Club?</h3>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu lectus quis mauris malesuada fringilla.
                            Praesent non tellus massa. Phasellus at neque et massa elementum sodales. Quisque neque enim, dignissim at
                            molestie quis, lobortis eu elit. Sed ornare ultrices tortor sed mollis. Pellentesque blandit quam imperdiet lorem
                            lobortis, at pharetra massa condimentum. Maecenas ac nibh mi. Donec suscipit dolor vitae faucibus
                            venenatis.<br />Praesent non tellus massa. Phasellus at neque et massa elementum sodales. Quisque neque enim,
                            dignissim at molestie quis, lobortis eu elit. Sed ornare ultrices tortor sed mollis. Pellentesque blandit quam
                            imperdiet lorem lobortis, at pharetra massa condimentum. Maecenas ac nibh mi. Donec suscipit dolor vitae faucibus
                            venenatis.</p>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default FAQ;