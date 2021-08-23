import React from "react";
import { Card, CardContent, CardInfo, CardInfoItem } from "../app.styled";
const ResultCard = ({ name, description, stars, forks }) => {
  return (
    <Card>
      <CardContent>
        <h4>facebook/{name}</h4>
        <p>{description}</p>
      </CardContent>
      <CardInfo>
        <CardInfoItem>
          <i className="far fa-star"></i> {stars}
        </CardInfoItem>
        <CardInfoItem>
          <i className="fas fa-code-branch"></i> {forks}
        </CardInfoItem>
      </CardInfo>
    </Card>
  );
};

export default ResultCard;
