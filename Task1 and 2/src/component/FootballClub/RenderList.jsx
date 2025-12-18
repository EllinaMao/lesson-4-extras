function RenderList({ items, renderItem }) {
  if (!items || items.length === 0) {
    return <p>No items to display.</p>;
  }
  return (
    <ul>
      {items.map((item, index) => (
        <TableCard key={index}>
            {renderItem(item)}
            </TableCard>
      ))}
    </ul>
  );
}

function TableCard(props) {
  return <li className="info-list">{props.children}</li>;
}

export default RenderList;
