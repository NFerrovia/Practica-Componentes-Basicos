import React from "react";

const ApprovalCard = (props) => {
  return (
    // A continuación se utilizan diferentes classNames de Semantic UI
    // con el objetivo de estilizar el contenido.

    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Aprobar</div>
          <div className="ui basic red button">Rechazar</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
