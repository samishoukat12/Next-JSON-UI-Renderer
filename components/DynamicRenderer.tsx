// DynamicRenderer.tsx
import React from 'react';
import { UIElement } from '../jsonUi/jsonUi';

interface DynamicRendererProps {
  jsonUI: UIElement;
}

const applyStyles = (style: React.CSSProperties | undefined): React.CSSProperties => {
  return style ? { ...style } : {};
};

const DynamicRenderer: React.FC<DynamicRendererProps> = ({ jsonUI }) => {
  const renderComponent = (element: UIElement, index: number): React.ReactNode => {
    const { type, props } = element;
    const children = Array.isArray(props.children)
      ? props.children.map((child, i) => renderComponent(child, i))
      : props.children;

    const elementStyle = applyStyles(props.style);

    return React.createElement(type, { ...props, style: elementStyle, key: index }, children);
  };

  return <div>{renderComponent(jsonUI, 0)}</div>;
};

export default DynamicRenderer;
