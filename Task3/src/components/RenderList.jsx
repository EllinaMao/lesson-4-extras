function RenderList({ 
    items, 
    renderItem, 
    listClassName = "", 
    itemClassName = ""  
}) {
  if (!items || items.length === 0) {
    return <p>No items to display.</p>;
  }

  return (
    <ul className={listClassName}>
      {items.map((item, index) => (
        <TableCard key={index} className={itemClassName}>
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