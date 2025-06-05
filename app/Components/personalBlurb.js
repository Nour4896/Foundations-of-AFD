//Prop passing for personal information, can be updated in page.tsx
const Blurb = ({title, content}) => {
    return (
        <article>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            <br></br>
            <p style={{textAlign: 'center'}}>{content}</p>
        </article>
    );
};

export default Blurb