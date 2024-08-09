import React from "react";
import { Card as ACard } from "antd";
import type { CardProps } from "antd";
import type { CardMetaProps, CardGridProps } from "antd/lib/card";

const Card: React.FC<CardProps> = (props) => {
  return <ACard {...props} />;
};

const CardMeta: React.FC<CardMetaProps> = (props) => {
  return <ACard.Meta {...props} />;
};
const CardGrid: React.FC<CardGridProps> = (props) => {
  return <ACard.Grid {...props} />;
};

const CardHeader: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="header">
      <div className="title">{title}</div>
    </div>
  );
};

export { Card, CardHeader, CardMeta, CardGrid };
