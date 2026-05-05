export default function AboutMe(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column w-50" style={{color: "white"}}>
                <h1>About Me!</h1>
                <p style={{fontSize: "1.25rem"}}>
                    I am a Computer Science student at UW-Madison with an equal love of making art
                    and frontend development. I built this site from scratch using React, Vite, and
                    Bootstrap, with custom CSS throughout. It's responsive across devices and
                    designed with accessibility in mind, meeting WCAG standards. Hope you like it!
                </p>
            </div>
        </div>
    );
}