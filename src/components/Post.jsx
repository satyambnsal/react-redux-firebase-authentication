import React from "react";

export default function Post({ id, title, body }) {
  return (
    <div>
      <h3>{title}</h3>
      <pre>{body}</pre>
    </div>
  );
}
