import Figure from "./Figure";


const Figures = ({ images}) =>  {
  return (
    <group>
      {images.map(
        (props) => <Figure key={props.url} {...props} /> /* prettier-ignore */,
      )}
    </group>
  );
}

export default Figures
