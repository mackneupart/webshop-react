import { Fragment } from "react";

export default function AboutFunction() {
    return (
        <Fragment>
            <section className="about-section">
            <h3 className='text-center'>About rubber ducks?</h3>
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2">
                    <div className="col">
                        <img className="about-img" width={2000} height={1333} src="assets/images/AboutRubberDuck.webp" alt="A giant rubber duck on water"></img>
                    </div>
                    <div className="col">
                        <p><span>Rubber ducks</span> are an iconic bath toy that has brought joy to
                            children and adults for decades. But where do they come from, and why are they so beloved?
                            The story of rubber ducks begins in Germany in the early 20th century. Inspired by the rubber duck
                            families that swam in the bathtubs of his childhood in Germany, a man named Peter Ganine created the
                            first rubber duck in 1949 when he was living in New York. His version was smaller and more practical
                            than the larger rubber duck families of his childhood.</p>
                        <br />
                        <p>
                            Ganine's first rubber duck was made of vinyl and had a small weight in the bottom to keep it
                            upright. It was also equipped with a small whistle that made it fun to play with in the bathtub. The
                            rubber duck was an immediate success, and soon other manufacturers began to copy Ganine's design.</p>
                        <br />
                        <p>
                            But why do rubber ducks make us so happy? Perhaps it's their simple, lively design, or maybe it's
                            the feeling of nostalgia they bring with them. Whatever the reason, rubber ducks have become a
                            beloved part of bath time routines all over the world, and a reminder of happy childhood moments.</p>

                        <a href="https://en.wikipedia.org/wiki/Rubber_duck">Read more about rubber ducks</a>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}