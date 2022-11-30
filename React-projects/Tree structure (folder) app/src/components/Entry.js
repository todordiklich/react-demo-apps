import { useState } from 'react';

const Entry = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="entry" style={{ paddingLeft: `${props.depth * 10}px` }}>
      {props.entry.children ? (
        <button
          className="entry-btn"
          onClick={() => {
            setIsExpanded((prevState) => !prevState);
          }}
        >
          {!isExpanded ? `+ ${props.entry.name}` : `- ${props.entry.name}`}
        </button>
      ) : (
        <div style={{ paddingLeft: '20px' }}>{props.entry.name}</div>
      )}
      {isExpanded &&
        props.entry.children?.map((entry, index) => (
          <Entry key={index} entry={entry} depth={props.depth + 1} />
        ))}
    </div>
  );
};

export default Entry;
