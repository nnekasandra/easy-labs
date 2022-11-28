export const ImageDisplay = (props) => {
    return (
      <figure>
        <img
          src={props.source}
          alt={props.alt}
        />
        <figcaption>{props.caption}</figcaption>
      </figure>
    );
};