import React from "react";
import { Badge } from "react-bootstrap";

export default function ArticleTable({ articles }) {
  const badgeVariant = (status) => {
    if (status === "Published") return "success";
    if (status === "Draft") return "warning";
    return "secondary";
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((a, idx) => (
            <tr key={idx}>
              <td>{a.title}</td>
              <td>
                <Badge pill bg={badgeVariant(a.status)}>
                  {a.status}
                </Badge>
              </td>
              <td>{a.lastEdited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
