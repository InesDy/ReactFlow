import { useCallback, useMemo, useState } from "react";
import { Background, Handle, Position } from "reactflow";

const TextUpdaterNode = ({ data }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const [connector, setConnector] = useState(false);

  const posts = useMemo(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    return data;
  }, [connector]);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.bottom}
        onConnect={(params) => setConnector(!connector)}
      />
      <div>
        <label htmlFor="text" placeholder="text"></label>
        <input id="text" name="text" onChange={onChange} />
      </div>
    </div>
  );
};

export default TextUpdaterNode;
