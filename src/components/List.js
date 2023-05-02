import Item from "./Item";
function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Land Rover" ano_lancamento={1985} />
        <Item marca="Ford Mustang" ano_lancamento={1988} />
      </ul>
    </>
  );
}

export default List;
