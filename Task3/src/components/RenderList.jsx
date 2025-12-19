function RenderList({ items, renderItem , className = "info-list"}) {
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
  return <li className={props.className}>{props.children}</li>;
}

export default RenderList;
