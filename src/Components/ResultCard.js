import React from "react";
import { Card, CardContent, CardInfo, CardInfoItem } from "../app.styled";
const ResultCard = () => {
  return (
    <Card>
      <CardContent>
        <h4>facebook/react</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </CardContent>
      <CardInfo>
        <CardInfoItem>
          <i className="far fa-star"></i> 173,012
        </CardInfoItem>
        <CardInfoItem>
          <i className="fas fa-code-branch"></i> 34,777
        </CardInfoItem>
      </CardInfo>
    </Card>
  );
};

export default ResultCard;
