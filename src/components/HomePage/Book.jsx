const Book = ({ scene, ...props }) => {
  return (
    <group>
      <primitive
        object={scene}
        children-0-castShadow
        {...props}
      />
    </group>
  );
};

export default Book;
