import { useCallback } from "react";
import { Background, Handle, Position } from "reactflow";

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.bottom}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <div>
        <label htmlFor="text" placeholder="text"></label>
        <input id="text" name="text" onChange={onChange} />
      </div>
    </div>
  );
}

export default TextUpdaterNode;
